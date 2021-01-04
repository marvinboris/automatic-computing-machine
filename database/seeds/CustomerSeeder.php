<?php

use App\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $customers = [
            [
                'name' => 'S.C.D.P.'
            ],
            [
                'name' => 'DELMA & Fils'
            ],
        ];

        foreach ($customers as $customer) {
            Customer::create($customer);
        }
    }
}
