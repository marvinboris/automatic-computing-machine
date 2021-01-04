<?php

use App\Unit;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $units = [
            [
                'name' => 'FF'
            ],
            [
                'name' => 'U'
            ],
            [
                'name' => 'Pièce'
            ],
            [
                'name' => 'Litre'
            ],
            [
                'name' => 'Jour'
            ],
        ];

        foreach ($units as $unit) {
            Unit::create($unit);
        }
    }
}
