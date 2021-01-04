<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(VehicleTypeSeeder::class);
        $this->call(CustomerSeeder::class);
        $this->call(OrganSeeder::class);
        $this->call(UnitSeeder::class);
        $this->call(ActionSeeder::class);
        $this->call(SubActionSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(AdminSeeder::class);
    }
}
