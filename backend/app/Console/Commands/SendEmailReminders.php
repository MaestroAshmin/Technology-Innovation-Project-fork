<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB; // Import DB Facade
use Mail; // Import the Mail facade
use App\Mail\ReminderEmail;
use App\Mail\RetestReminderEmail;
use App\Models\Key;

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
        $days = 1;  //need to add another functionality for admin to change the threshold
        $usersToRemind = DB::select("
            SELECT u.* 
            FROM users u 
            LEFT JOIN test_result tr ON u.user_id = tr.user_id 
            WHERE tr.user_id IS NULL 
            AND u.created_at <= NOW() - INTERVAL ? second
        ", [$days]);

        foreach ($usersToRemind as $user) {
            $usercrypt = Key::where('user_id', $user->user_id)->first();
            $key = $usercrypt->encryption_key;
            $iv = $usercrypt->iv;
            // Get user's email
            $email = openssl_decrypt($user->email, 'aes-256-cbc', $key, 0, $iv);
            // Get user's name
            $name = openssl_decrypt($user->name, 'aes-256-cbc', $key, 0, $iv);
            // Use Laravel's Mail facade to send emails
            Mail::to($email)->send(new ReminderEmail($name));
        }
 
        // Send reminders to users to take a test again after n days
        $days2 = 1;  //need to add another functionality for admin to change the threshold
        $usersToRetest = DB::select("
            SELECT u.*
            FROM users u
            INNER JOIN (
                SELECT user_id, MAX(test_date) AS latest_test_date
                FROM test_result
                GROUP BY user_id
            ) tr ON u.user_id = tr.user_id
            WHERE tr.latest_test_date <= NOW() - INTERVAL ? second
        ", [$days2]);

        foreach ($usersToRetest as $user) {
            $usercrypt = Key::where('user_id', $user->user_id)->first();
            $key = $usercrypt->encryption_key;
            $iv = $usercrypt->iv;
            // Get user's email
            $email = openssl_decrypt($user->email, 'aes-256-cbc', $key, 0, $iv);
            // Get user's name
            $name = openssl_decrypt($user->name, 'aes-256-cbc', $key, 0, $iv);
            // Use Laravel's Mail facade to send emails
            Mail::to($email)->send(new RetestReminderEmail($name));
        }
        $this->info('Email reminders sent successfully.');
    }
}