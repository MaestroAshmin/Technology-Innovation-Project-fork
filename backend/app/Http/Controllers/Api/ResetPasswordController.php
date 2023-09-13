<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ResetPasswordController extends Controller
{
    // Reset Password
    public function reset(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'errors' => $validator->errors(),
            ], 422); // HTTP status code 422 for validation errors
        }
        // Check if the user with the provided email exists
        $user = User::where('email', $request->input('email'))->first();
        
        if (!$user) {
            return response()->json(['message' => 'Email not found'], 404);
        }
        // $status = Password::reset(
        //     $request->only('email', 'password', 'password_confirmation'),
        //     function ($user, $password) {
        //         $user->forceFill([
        //             'password' => bcrypt($password),
        //         ])->save();
        //     }
        // );
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return response()->JSON([
            'status' => true,
            'message' => 'Password Change Successful',
        ], 200);
    }
}
