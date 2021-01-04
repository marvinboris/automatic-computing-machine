<?php

use App\Organ;
use Illuminate\Database\Seeder;

class OrganSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $organs = [
            [
                'name' => 'Vanne d\'évacuation'
            ],
            [
                'name' => 'Clapet de fond'
            ],
            [
                'name' => 'Soupape'
            ],
            [
                'name' => 'Travaux sur trou d\'homme'
            ],
            [
                'name' => 'Epreuves hydraulique'
            ],
            [
                'name' => 'Travaux de jaugeage'
            ],
            [
                'name' => 'Travaux de soudage'
            ],
            [
                'name' => 'Autres travaux'
            ],
        ];

        foreach ($organs as $organ) {
            Organ::create($organ);
        }
    }
}
