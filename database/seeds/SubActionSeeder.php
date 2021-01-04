<?php

use App\Action;
use App\SubAction;
use App\Unit;
use Illuminate\Database\Seeder;

class SubActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sub_actions = [
            [
                'name' => 'Dépose des accessoires de vanne (siège en téflon, boisseau sphérique, arbre de manœuvre, joints toriques, bague de flottement)',
                'action_id' => Action::whereName('Entretien et réparation de la vanne d\'évacuation')->first()->id,
                'unit_id' => Unit::whereName('FF')->first()->id,
                'price' => 25000,
            ],
            [
                'name' => 'Pose des différents accessoires',
                'action_id' => Action::whereName('Entretien et réparation de la vanne d\'évacuation')->first()->id,
                'unit_id' => Unit::whereName('FF')->first()->id,
                'price' => 25000,
            ],
            [
                'name' => 'Epreuve de la vanne sur le banc d\'essai',
                'action_id' => Action::whereName('Entretien et réparation de la vanne d\'évacuation')->first()->id,
                'unit_id' => Unit::whereName('FF')->first()->id,
                'price' => 30000,
            ],


            [
                'name' => 'Démontage du té de chargement',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 10000,
            ],
            [
                'name' => 'Démontage du trou d\'homme',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 20000,
            ],
            [
                'name' => 'Dépose de la tige de commande',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 10000,
            ],
            [
                'name' => 'Démontage du socle du clapet',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 10000,
            ],
            [
                'name' => 'Réparation du clapet',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 65000,
            ],
            [
                'name' => 'Commande',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 10000,
            ],
            [
                'name' => 'Remontage du trou d\'homme',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 20000,
            ],
            [
                'name' => 'Remontage de la commande du clapet',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 10000,
            ],
            [
                'name' => 'Sécurisation du trou d\'homme',
                'action_id' => Action::whereName('Travaux sur commande du clapet bloqué ou déconnecté')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 70000,
            ],


            [
                'name' => 'Démontage du té de chargement',
                'action_id' => Action::whereName('Travaux sur té de chargement')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 20000,
            ],
            [
                'name' => 'En cas de fissure sur le té, faire des travaux de soudure',
                'action_id' => Action::whereName('Travaux sur té de chargement')->first()->id,
                'unit_id' => Unit::whereName('FF')->first()->id,
                'price' => 40000,
            ],
            [
                'name' => 'Si fuite au niveau du té de chargement, remplacer le joint',
                'action_id' => Action::whereName('Travaux sur té de chargement')->first()->id,
                'unit_id' => Unit::whereName('FF')->first()->id,
                'price' => 35000,
            ],
            [
                'name' => 'Remontage du té de chargement',
                'action_id' => Action::whereName('Travaux sur té de chargement')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 20000,
            ],


            [
                'name' => 'Démontage du trou d\'homme',
                'action_id' => Action::whereName('Remplacement du taquet de vidange')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 20000,
            ],
            [
                'name' => 'Vidange',
                'action_id' => Action::whereName('Remplacement du taquet de vidange')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 30000,
            ],
            [
                'name' => 'Remontage du trou d\'homme',
                'action_id' => Action::whereName('Remplacement du taquet de vidange')->first()->id,
                'unit_id' => Unit::whereName('U')->first()->id,
                'price' => 20000,
            ],
            [
                'name' => 'Sécurisation du trou d\'homme',
                'action_id' => Action::whereName('Remplacement du taquet de vidange')->first()->id,
                'unit_id' => Unit::whereName('FF')->first()->id,
                'price' => 70000,
            ],
        ];

        foreach ($sub_actions as $sub_action) {
            SubAction::create($sub_action);
        }
    }
}
