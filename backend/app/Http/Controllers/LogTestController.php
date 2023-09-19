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
        $testResult->test_result_id = $req->input('test_result_id');
        $testResult->email = $req->input('email');
        $testResult->result = $req->input('result');
        $testResult->test_date = $req->input('test_date');
        $testResult->risk_exposure = $req->input('risk_exposure');
        $testResult->reasons_for_testing = $req->input('reasons_for_testing');
        $testResult->no_of_kits_purchased = $req->input('no_of_kits_purchased');
        $testResult->purchase_date = $req->input('purchase_date');
        $testResult->user_id = $req->input('user_id');

        // save data collected to the database
        $testResult->save();

        return $req->input();
    }
}
