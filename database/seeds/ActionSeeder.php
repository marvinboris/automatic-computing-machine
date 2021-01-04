<?php

use App\Action;
use App\Organ;
use App\Unit;
use Illuminate\Database\Seeder;

class ActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $actions = [
            [
                'name' => 'Prise en main',
                'unit_id' => Unit::whereName('FF')->first()->id,
                'price' => 150000,
            ],
            [
                'name' => 'Dégazage',
                'unit_id' => Unit::whereName('FF')->first()->id,
                'price' => 275000,
            ],
            [
                'name' => 'Entretien et réparation de la vanne d\'évacuation',
                'organ_id' => Organ::whereName('Vanne d\'évacuation')->first()->id,
                'price' => 80000,
            ],
            [
                'name' => 'Travaux sur commande du clapet bloqué ou déconnecté',
                'organ_id' => Organ::whereName('Clapet de fond')->first()->id,
                'price' => 225000,
            ],
            [
                'name' => 'Travaux sur té de chargement',
                'organ_id' => Organ::whereName('Travaux sur trou d\'homme')->first()->id,
                'price' => 115000,
            ],
            [
                'name' => 'Remplacement du taquet de vidange',
                'organ_id' => Organ::whereName('Travaux sur trou d\'homme')->first()->id,
                'price' => 140000,
            ],
        ];

        foreach ($actions as $action) {
            Action::create($action);
        }
    }
}
