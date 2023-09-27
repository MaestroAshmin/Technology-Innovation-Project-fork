<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestResult;

class LogTestController extends Controller
{
    //
    function logTest(Request $req) 
    {
        $testResult = new TestResult;

        // get data from input
        $testResult->user_id = $req->input('user_id');
        $testResult->test_result = $req->input('test_result');
        $testResult->test_date = $req->input('test_date');
        $testResult->risk_exposure = $req->input('risk_exposure');    

        // save data collected to the database
        $testResult->save();

        return $req->input();
    }
}
