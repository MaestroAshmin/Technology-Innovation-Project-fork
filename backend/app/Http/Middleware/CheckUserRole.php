<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class CheckUserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // Check if the authenticated user has the specified role
        $user = Auth::user();
        dd($request->user());
        exit;
        if ($request->user() && $request->user()->role == $role) {
            return $next($request);
        }

        // Return a JSON response for unauthorized users
        // return response()->json(['error' => 'Unauthorized'], 403);
        abort(403, 'Unauthorized'); // Return a 403 Forbidden response for unauthorized users
    }
}
