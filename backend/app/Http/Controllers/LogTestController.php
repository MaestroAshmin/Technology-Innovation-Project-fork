<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\TestResult;

class LogTestController extends Controller
{
    //
    function logTest(Request $req) 
    {
        // validate the request data
         $validator = Validator::make($req->all(), [
            'user_id' => 'required|integer|exists:users,user_id',
            'test_result' => 'required|string|max:20',
            'test_date' => 'nullable|date',
            'risk_exposure' => 'nullable|string|max:20',
        ]);

        // check if the validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                $validator->errors()
            ], 400);
        }      

        // Create a new testResult
        $testResult = new TestResult;
        $testResult->user_id = $req->input('user_id');
        $testResult->test_result = $req->input('test_result');
        $testResult->test_date = $req->input('test_date');
        $testResult->risk_exposure = $req->input('risk_exposure');    

        // save data collected to the database
        $testResult->save();

        return $req->input();
    }
}
