<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    // Register User
    public function registerUser(Request $request){
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|unique:users,email|email',
            'password' => 'required|string|min:8|confirmed',
            'gender' => 'required|string',
            'age' => 'required|integer|gte:10|lte:100',
            'nationality' => 'required|string|max:255',
            'postcode' => 'required|integer|digits_between:1,4', // Updated to allow for 4 digits
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'errors' => $validator->errors(),
            ], 422); // Use HTTP status code 422 for validation errors
        }
        // Create a new user
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'gender' => $request->input('gender'),
            'age' => $request->input('age'),
            'nationality' => $request->input('nationality'),
            'postcode' => $request->input('postcode'),
            'role' => 0, // role is 0 by default for user registration indicating normal user
        ]);
        return response()->JSON([
            'status' => true,
            'message' => 'Account Creation Successful. Please login to Proceed',
            'token' => $user->createToken('API TOKEN')->plainTextToken
        ], 200);
    }
}
