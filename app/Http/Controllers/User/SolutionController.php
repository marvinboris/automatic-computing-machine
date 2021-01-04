<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Maintenance;
use App\Solution;
use Illuminate\Http\Request;

class SolutionController extends Controller
{
    private $rules = [
        'solution_id' => 'required|exists:actions,id',
        'solution_type' => 'required|string',
        'quantity' => 'required|numeric',
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

    public function store(Request $request, $maintenance_id, $problem_id)
    {
        $maintenance = Maintenance::find($maintenance_id);

        if (!$maintenance) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Maintenance inexistante',
            ]
        ]);

        $problem = $maintenance->problems()->find($problem_id);

        if (!$problem) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Problème inexistant',
            ]
        ]);

        
        $request->validate($this->rules);

        Solution::create(array_merge($request->all(), [
            'problem_id' => $problem_id
        ]));

        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances,
            'message' => [
                'type' => 'success',
                'content' => 'Solution créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $maintenance_id, $problem_id, $id)
    {
        $maintenance = Maintenance::find($maintenance_id);

        if (!$maintenance) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Maintenance inexistante',
            ]
        ]);

        $problem = $maintenance->problems()->find($problem_id);

        if (!$problem) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Problème inexistant',
            ]
        ]);

        $solution = $problem->solutions()->find($id);

        if (!$solution) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Solution inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $solution->update($request->all());

        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances,
            'message' => [
                'type' => 'success',
                'content' => 'Solution modifiée avec succès',
            ]
        ]);
    }

    public function destroy($maintenance_id, $problem_id, $id)
    {
        $maintenance = Maintenance::find($maintenance_id);

        if (!$maintenance) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Maintenance inexistante',
            ]
        ]);

        $problem = $maintenance->problems()->find($problem_id);

        if (!$problem) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Problème inexistant',
            ]
        ]);

        $solution = $problem->solutions()->find($id);

        if (!$solution) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Solution inexistante',
            ]
        ]);

        $solution->delete();

        $maintenances = $this->get();

        return response()->json([
            'maintenances' => $maintenances,
            'message' => [
                'type' => 'success',
                'content' => 'Solution supprimée avec succès',
            ]
        ]);
    }
}
