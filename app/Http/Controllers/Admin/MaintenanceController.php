<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Maintenance;
use Illuminate\Http\Request;

class MaintenanceController extends Controller
{
    private $rules = [
        'date' => 'required|date',
        'real_end_date' => 'required|date',
        'real_start_date' => 'required|date',
        'days' => 'required|numeric',
        'ref' => 'required|unique:maintenances',
        'customer_id' => 'required|exists:customers,id',
    ];

    private function get()
    {
        $maintenances = [];
        foreach (Maintenance::get() as $maintenance) {
            $maintenances[] = array_merge($maintenance->toArray(), [
                'customer' => $maintenance->customer ?? $maintenance->customer->name,
                'problems' => $maintenance->problems
            ]);
        }

        return $maintenances;
    }



    public function index()
    {
        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Maintenance::create($request->all());

        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances,
            'message' => [
                'type' => 'success',
                'content' => 'Maintenance créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $maintenance = Maintenance::find($id);

        if (!$maintenance) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Maintenance inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $maintenance->update($request->all());

        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances,
            'message' => [
                'type' => 'success',
                'content' => 'Maintenance modifiée avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $maintenance = Maintenance::find($id);

        if (!$maintenance) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Maintenance inexistante',
            ]
        ]);

        $maintenance->delete();

        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances,
            'message' => [
                'type' => 'success',
                'content' => 'Maintenance supprimée avec succès',
            ]
        ]);
    }
}
