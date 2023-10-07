<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\TestResult;
use App\Models\User;

class TestResultController extends Controller
{
    // group positive cases by postcode
    function getPositiveCasesByPostcodes() {
        $positiveCasesByPostcode = DB::table('test_result') 
            ->join('users', 'test_result.user_id', '=', 'users.user_id')
            ->where('test_result.test_result', 'positive')
            ->groupby('users.postcode')
            ->select('users.postcode', DB::raw('count(*) as total_positive_case'))
            ->get();


        // return error message if the list if empty
        if ($positiveCasesByPostcode->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No positive case found for the provided postcodes'
            ]);
        }

        return $positiveCasesByPostcode;
    }


}
