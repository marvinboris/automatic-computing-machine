<?php

namespace App\Http\Controllers\Admin;

use App\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $customers = [];
        foreach (Customer::get() as $customer) {
            $customers[] = array_merge($customer->toArray(), [
                'maintenances' => $customer->maintenances,
            ]);
        }

        return $customers;
    }



    public function index()
    {
        $customers = $this->get();

        return response()->json([
            'customers' => $customers
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Customer::create($request->all());

        $customers = $this->get();

        return response()->json([
            'customers' => $customers,
            'message' => [
                'type' => 'success',
                'content' => 'Client créé avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);

        if (!$customer) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Client inexistant',
            ]
        ]);

        $request->validate($this->rules);

        $customer->update($request->all());

        $customers = $this->get();

        return response()->json([
            'customers' => $customers,
            'message' => [
                'type' => 'success',
                'content' => 'Client modifié avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $customer = Customer::find($id);

        if (!$customer) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Client inexistant',
            ]
        ]);

        $customer->delete();

        $customers = $this->get();

        return response()->json([
            'customers' => $customers,
            'message' => [
                'type' => 'success',
                'content' => 'Client supprimé avec succès',
            ]
        ]);
    }
}
