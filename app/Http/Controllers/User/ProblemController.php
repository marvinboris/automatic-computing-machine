<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Maintenance;
use App\Problem;
use Illuminate\Http\Request;

class ProblemController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $maintenances = [];
        foreach (Maintenance::get() as $maintenance) {
            $problems = [];
            foreach ($maintenance->problems as $problem) {
                $solutions = [];
                foreach ($problem->solutions as $solution) {
                    $solutions[] = array_merge($solution->toArray(), [
                        'problem' => $solution->problem->name,
                        'solution' => $solution->solution->name,
                    ]);
                }

                $problems[] = array_merge($problem->toArray(), [
                    'solutions' => $solutions,
                    'maintenance' => $problem->maintenance->ref,
                ]);
            }

            $maintenances[] = array_merge($maintenance->toArray(), [
                'customer' => $maintenance->vehicle->customer->name,
                'customer_id' => $maintenance->vehicle->customer->id,
                'vehicle' => $maintenance->vehicle->ref,
                'problems' => $problems
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

    public function store(Request $request, $maintenance_id)
    {
        $request->validate($this->rules);

        $maintenance = Maintenance::find($maintenance_id);

        if (!$maintenance) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Maintenance inexistante',
            ]
        ]);

        Problem::create(array_merge($request->all(), [
            'maintenance_id' => $maintenance_id,
        ]));

        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances,
            'message' => [
                'type' => 'success',
                'content' => 'Problème créé avec succès',
            ]
        ]);
    }

    public function update(Request $request, $maintenance_id, $id)
    {
        $maintenance = Maintenance::find($maintenance_id);

        if (!$maintenance) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Maintenance inexistante',
            ]
        ]);

        $problem = $maintenance->problems()->find($id);

        if (!$problem) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Problème inexistant',
            ]
        ]);

        $request->validate($this->rules);

        $problem->update($request->all());

        $maiantenances = $this->get();

        return response()->json([
            'maiantenances' => $maiantenances,
            'message' => [
                'type' => 'success',
                'content' => 'Problème modifié avec succès',
            ]
        ]);
    }

    public function destroy($maintenance_id, $id)
    {
        $maintenance = Maintenance::find($maintenance_id);

        if (!$maintenance) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Maintenance inexistante',
            ]
        ]);

        $problem = $maintenance->problems()->find($id);

        if (!$problem) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Problème inexistant',
            ]
        ]);

        $problem->delete();

        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances,
            'message' => [
                'type' => 'success',
                'content' => 'Problème supprimé avec succès',
            ]
        ]);
    }
}
