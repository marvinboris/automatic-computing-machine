<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Boris Ndouma',
                'email' => 'jaris.ultio.21@gmail.com',
                'password' => Hash::make('12345')
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
