<?php

namespace App\Http\Controllers;

use App\Admin;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private function target()
    {
        $user = request()->user();
        switch ($user->token()->name) {
            case 'User Personal Access Token':
                $user = User::find($user->id);
                break;
            case 'Admin Personal Access Token':
                $user = Admin::find($user->id);
                break;
        }
        return $user;
    }



    public function logout()
    {
        request()->user()->token()->revoke();
        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Déconnexion réussie.'
            ]
        ]);
    }

    public function user()
    {
        $user = $this->target();

        $role = $user->role();

        $data = array_merge($user->toArray());

        if ($role === 'user') $data = array_merge($data);
        else if ($role === 'admin') $data = array_merge($data);

        return response()->json(['data' => $data, 'role' => $role]);
    }
}
