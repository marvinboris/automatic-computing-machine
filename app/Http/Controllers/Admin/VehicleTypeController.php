<?php

namespace App\Http\Controllers\Admin;

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
        $vehicle_types = [];
        foreach (VehicleType::get() as $vehicle_type) {
            $vehicle_types[] = array_merge($vehicle_type->toArray());
        }

        return $vehicle_types;
    }



    public function index()
    {
        $vehicle_types = $this->get();

        return response()->json([
            'vehicle_types' => $vehicle_types
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        VehicleType::create($request->all());

        $vehicle_types = $this->get();

        return response()->json([
            'vehicle_types' => $vehicle_types,
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

        $vehicle_types = $this->get();

        return response()->json([
            'vehicle_types' => $vehicle_types,
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

        $vehicle_types = $this->get();

        return response()->json([
            'vehicle_types' => $vehicle_types,
            'message' => [
                'type' => 'success',
                'content' => 'Type de véhicule supprimé avec succès',
            ]
        ]);
    }
}
