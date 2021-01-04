<?php

use App\VehicleType;
use Illuminate\Database\Seeder;

class VehicleTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $vehicle_types = [
            [
                'name' => 'Wagon'
            ]
        ];

        foreach ($vehicle_types as $vehicle_type) {
            VehicleType::create($vehicle_type);
        }
    }
}
