<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB; // Import DB Facade
use Mail; // Import the Mail facade

class SendEmailReminders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:reminders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send email reminders to users';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Send reminders to users who have not submitted test results n days after registration
        $days = 30;  //need to add another functionality for admin to change the threshold
        $usersToRemind = DB::select("
            SELECT u.* 
            FROM users u 
            LEFT JOIN test_result tr ON u.user_id = tr.user_id 
            WHERE tr.user_id IS NULL 
            AND u.created_at <= NOW() - INTERVAL ? DAY
        ", [$days]);

        foreach ($usersToRemind as $user) {
            // Get user's email
            $email = $user->email;
            // Get user's name
            $name = $user->name;
            // Use Laravel's Mail facade to send emails
            Mail::to($email)->send(new ReminderEmail($name));
        }

        // Send reminders to users to take a test again after n days
        $days2 = 30;  //need to add another functionality for admin to change the threshold
        $usersToRetest = DB::select("
            SELECT u.*
            FROM users u
            INNER JOIN (
                SELECT user_id, MAX(test_date) AS latest_test_date
                FROM test_result
                GROUP BY user_id
            ) tr ON u.user_id = tr.user_id
            WHERE tr.latest_test_date <= NOW() - INTERVAL ? DAY;
        ", [$days2]);

        foreach ($usersToRetest as $user) {
            // Get user's email
            $email = $user->email;
            // Get user's name
            $name = $user->name;
            // Use Laravel's Mail facade to send emails
            Mail::to($email)->send(new RetestReminderEmail($name));
        }

        $this->info('Email reminders sent successfully.');
    }
}