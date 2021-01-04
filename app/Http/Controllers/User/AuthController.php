<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;

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
        // if (!$user->email_verified_at) return response()->json([
        //     'message' => [
        //         'type' => 'danger',
        //         'content' => 'Veuillez vérifier votre courrier électronique et cliquer sur le lien d\'activation.'
        //     ]
        // ], 403);
        // if ($user->is_active === 0) return response()->json([
        //     'message' => [
        //         'type' => 'danger',
        //         'content' => 'Votre compte n\'est pas actif. Veuillez contacter l\'administrateur.'
        //     ]
        // ], 403);

        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => [
                    'type' => 'danger',
                    'content' => 'Non autorisé'
                ]
            ], 401);

        $user->update([
            'ip' => $request->ip(),
            'last_login' => now()
        ]);
        $tokenResult = $user->createToken('User Personal Access Token');
        $token = $tokenResult->token;
        // if ($request->remember_me)
        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'userData' => array_merge($user->toArray())
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
                'content' => 'Lien de réinitialisation de mot de passe envoyé avec succès.'
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
                    'content' => 'Votre mot de passe a été réinitialisé avec succès.'
                ]
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Echec.'
            ]
        ]);
    }
}
