<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $newUser = new User();
        $newUser->name = 'vale';
        $newUser->email = 'vale@gmail.com';
        $newUser->password = bcrypt('password');
        $newUser->save();
    }
}
