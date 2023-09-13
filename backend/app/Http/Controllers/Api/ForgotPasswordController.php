<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class ForgotPasswordController extends Controller
{
    // Send Password Reset Email
    public function sendResetLinkEmail(Request $request)
    {
       $request->validate(['email' => 'required|email']);

        // Check if the email is registered
        $user = User::where('email', $request->input('email'))->first();

        if (!$user) {
            return response()->json(['message' => 'Email not found'], 404);
        }
        // Send the password reset email
        $status = Password::sendResetLink(
            $request->only('email')
        );
        return $status === Password::RESET_LINK_SENT
                    ? response()->json(['message' => 'Password reset email sent'])
                    : response()->json(['message' => 'Password reset email could not be sent'], 400);
    }
}
