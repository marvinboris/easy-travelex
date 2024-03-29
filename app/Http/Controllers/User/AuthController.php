<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::whereEmail($request->email)->first();

        $credentials = ['email' => $user->email, 'password' => $request->password];
        if ($user->is_active === 0) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Your account is not active. Please, contact the administrator.'
            ]
        ], 403);

        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => [
                    'type' => 'danger',
                    'content' => 'Unauthorized'
                ]
            ], 401);

        $user->update([
            'ip' => $request->ip(),
            'last_login' => now()
        ]);
        $tokenResult = $user->createToken(User::personalAccessToken());
        $token = $tokenResult->token;
        // if ($request->remember_me)
        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        $data = array_merge($user->toArray(), [
            'notifications' => $user->notifications()->latest()->limit(5)->get(),
            // 'language' => $user->language->abbr
        ]);

        $role = $user->role;

        $role_features = [];
        foreach ($role->features as $feature) {
            $role_features[] = [
                'id' => $feature->id,
                'prefix' => $feature->prefix,
                'permissions' => $feature->pivot->access,
            ];
        }

        $role = $role->toArray();
        $role['features'] = $role_features;

        $data = $data + [
            'role' => $role
        ];

        return response()->json([
            'token' => 'Bearer ' . $tokenResult->accessToken,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'data' => $data,
        ]);
    }

    public function forgot(Request $request)
    {
        $request->validate([
            'email' => 'exists:users'
        ]);

        $user = User::whereEmail($request->email)->first();
        $link = url('/auth/reset/' . $user->id) . '/' . Crypt::encryptString($user->toJson());
        // Mail::to($request->email)->send(new ResetLink($link));

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Reset password link successfully sent.'
            ]
        ]);
    }

    public function reset(Request $request, $id, $code)
    {
        $request->validate([
            'password' => 'required|confirmed'
        ]);

        $user = User::find($id);
        if (Crypt::decryptString($code) === $user->toJson()) {
            $user->password = Hash::make($request->password);
            $user->save();

            return response()->json([
                'message' => [
                    'type' => 'success',
                    'content' => 'Your password has been successfully reset.'
                ]
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Failure.'
            ]
        ]);
    }
}
