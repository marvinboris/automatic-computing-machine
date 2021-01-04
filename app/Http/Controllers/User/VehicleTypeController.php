<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\VehicleType;
use Illuminate\Http\Request;

class VehicleTypeController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $vehicleTypes = [];
        foreach (VehicleType::get() as $vehicle_type) {
            $vehicleTypes[] = array_merge($vehicle_type->toArray());
        }

        return $vehicleTypes;
    }



    public function index()
    {
        $vehicleTypes = $this->get();

        return response()->json([
            'vehicleTypes' => $vehicleTypes
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        VehicleType::create($request->all());

        $vehicleTypes = $this->get();

        return response()->json([
            'vehicleTypes' => $vehicleTypes,
            'message' => [
                'type' => 'success',
                'content' => 'Type de véhicule créé avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $vehicle_type = VehicleType::find($id);

        if (!$vehicle_type) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Type de véhicule inexistant',
            ]
        ]);

        $request->validate($this->rules);

        $vehicle_type->update($request->all());

        $vehicleTypes = $this->get();

        return response()->json([
            'vehicleTypes' => $vehicleTypes,
            'message' => [
                'type' => 'success',
                'content' => 'Type de véhicule modifié avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $vehicle_type = VehicleType::find($id);

        if (!$vehicle_type) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Type de véhicule inexistant',
            ]
        ]);

        $vehicle_type->delete();

        $vehicleTypes = $this->get();

        return response()->json([
            'vehicleTypes' => $vehicleTypes,
            'message' => [
                'type' => 'success',
                'content' => 'Type de véhicule supprimé avec succès',
            ]
        ]);
    }
}
