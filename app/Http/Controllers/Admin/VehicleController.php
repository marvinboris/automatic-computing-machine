<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    private $rules = [
        'year' => 'required|numeric',
        'nominal_capacity' => 'required|numeric',
        'ref' => 'required|unique:vehicles',
        'serial_number' => 'required|string',
        'chassis_number' => 'required|string',
        'vehicle_type_id' => 'required|exists:vehicle_types,id',
        'builder_id' => 'nullable|exists:builders,id',
    ];

    private function get()
    {
        $vehicles = [];
        foreach (Vehicle::get() as $vehicle) {
            $vehicles[] = array_merge($vehicle->toArray(), [
                'vehicle_type' => $vehicle->vehicle_type ?? $vehicle->vehicle_type->name,
                'builder' => $vehicle->builder ?? $vehicle->builder->name,
            ]);
        }

        return $vehicles;
    }



    public function index()
    {
        $vehicles = $this->get();

        return response()->json([
            'vehicles' => $vehicles
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Vehicle::create($request->all());

        $vehicles = $this->get();

        return response()->json([
            'vehicles' => $vehicles,
            'message' => [
                'type' => 'success',
                'content' => 'Véhicule créé avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $vehicle = Vehicle::find($id);

        if (!$vehicle) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Véhicule inexistant',
            ]
        ]);

        $request->validate($this->rules);

        $vehicle->update($request->all());

        $vehicles = $this->get();

        return response()->json([
            'vehicles' => $vehicles,
            'message' => [
                'type' => 'success',
                'content' => 'Véhicule modifié avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $vehicle = Vehicle::find($id);

        if (!$vehicle) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Véhicule inexistant',
            ]
        ]);

        $vehicle->delete();

        $vehicles = $this->get();

        return response()->json([
            'vehicles' => $vehicles,
            'message' => [
                'type' => 'success',
                'content' => 'Véhicule supprimé avec succès',
            ]
        ]);
    }
}
