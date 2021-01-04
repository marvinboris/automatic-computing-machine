<?php

namespace App\Http\Controllers\User;

use App\Action;
use App\Customer;
use App\Http\Controllers\Controller;
use App\Maintenance;
use App\Organ;
use App\Sell;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Http\Request;

class MaintenanceController extends Controller
{
    private $rules = [
        'date' => 'required|date',
        'real_end_date' => 'nullable|date',
        'real_start_date' => 'nullable|date',
        'delivery_date' => 'required|date',
        'days' => 'nullable|numeric',
        'ref' => 'required|unique:maintenances',
        'vehicle_id' => 'required|exists:vehicles,id',
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
                        'maintenance' => $problem->maintenance->ref,
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

        $customers = [];
        foreach (Customer::all() as $customer) {
            $customers[] = array_merge($customer->toArray(), [
                'vehicles' => $customer->vehicles,
            ]);
        }

        $actions = [];
        foreach (Action::all() as $action) {
            $actions[] = array_merge($action->toArray(), [
                'value' => json_encode([
                    'type' => get_class($action),
                    'id' => $action->id,
                ]),
            ]);
        }

        $sells = [];
        foreach (Sell::all() as $sell) {
            $sells[] = array_merge($sell->toArray(), [
                'value' => json_encode([
                    'type' => get_class($sell),
                    'id' => $sell->id,
                ]),
            ]);
        }

        $organs = [];
        foreach (Organ::all() as $organ) {
            $solutions = [];
            foreach (array_merge($actions, $sells) as $solution) {
                if ($solution['organ_id'] === $organ->id)
                    $solutions[] = $solution;
            }

            $organs[] = array_merge($organ->toArray(), [
                'solutions' => $solutions,
            ]);
        }

        return response()->json([
            'maintenances' => $maintenances,
            'customers' => $customers,
            'organs' => $organs,
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

    public function proforma(Request $request, $id)
    {
        $maintenance = Maintenance::find($id);

        $total = 0;
        $problems = [];
        foreach ($maintenance->problems as $problem) {
            $solutions = [];
            foreach ($problem->solutions as $solution) {
                $total += $solution->solution->price * $solution->quantity;

                $solutions[] = array_merge($solution->toArray(), [
                    'problem' => $solution->problem->name,
                    'solution' => $solution->solution,
                ]);
            }

            $problems[] = array_merge($problem->toArray(), [
                'solutions' => $solutions,
                'maintenance' => $problem->maintenance->ref,
            ]);
        }

        $pdf = PDF::loadView('pdf.proforma', array_merge($maintenance->toArray(), [
            'customer' => $maintenance->vehicle->customer,
            'problems' => $problems,
            'total' => $total,
        ]));
        return $pdf->download($request->name);
    }
}
