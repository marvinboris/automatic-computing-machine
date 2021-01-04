<?php

namespace App\Http\Controllers\User;

use App\Customer;
use App\Gauging;
use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Http\Request;

class GaugingController extends Controller
{
    private $rules = [
        'date' => 'required|date',
        'nominal_capacity' => 'required|numeric',
        'gap_distance' => 'required|numeric',
        'average_centimetric_volume' => 'required|numeric',
        'total_height' => 'required|numeric',
        'total_capacity' => 'required|numeric',
        'days' => 'nullable|numeric',
        'ref' => 'required|unique:gaugings',
        'gauging_id' => 'nullable|exists:gaugings,id',
        'vehicle_id' => 'required|exists:vehicles,id',
    ];

    private function get()
    {
        $gaugings = [];
        foreach (Gauging::get() as $gauging) {
            $heights = [];
            $volumes = [];
            foreach ($gauging->measures as $measure) {
                $heights[] = $measure['h'];
                $volumes[] = $measure['v'];
            }

            $gaugings[] = array_merge($gauging->toArray(), [
                'customer' => $gauging->vehicle->customer->name,
                'customer_id' => $gauging->vehicle->customer->id,
                'vehicle' => $gauging->vehicle->ref,
                'heights' => $heights,
                'volumes' => $volumes,
            ]);
        }

        return $gaugings;
    }



    public function index()
    {
        $gaugings = $this->get();

        $customers = [];
        foreach (Customer::all() as $customer) {
            $customers[] = array_merge($customer->toArray(), [
                'vehicles' => $customer->vehicles,
            ]);
        }

        return response()->json([
            'gaugings' => $gaugings,
            'customers' => $customers,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $measures = [];

        Gauging::create($request->except(['heights', 'volumes']) + [
            'measures' => json_encode($measures),
        ]);

        $gaugings = $this->get();

        return response()->json([
            'gaugings' => $gaugings,
            'message' => [
                'type' => 'success',
                'content' => 'Jaugeage créé avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $gauging = Gauging::find($id);

        if (!$gauging) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Jaugeage inexistant',
            ]
        ]);

        if (!$request->has('heights')) $request->validate($this->rules);

        $measures = [];
        $heights = $request->heights ? $request->heights : [];
        $volumes = $request->volumes ? $request->volumes : [];
        foreach ($heights as $index => $height) {
            $measures[] = [
                'h' => $height,
                'v' => $volumes[$index],
            ];
        }

        return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => json_encode([
                    'measures' => $measures
                ])
            ]
        ]);

        $gauging->update($request->except(['heights', 'volumes']) + [
            'measures' => json_encode($measures),
        ]);

        $gaugings = $this->get();

        return response()->json([
            'gaugings' => $gaugings,
            'message' => [
                'type' => 'success',
                'content' => 'Jaugeage modifié avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $gauging = Gauging::find($id);

        if (!$gauging) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Jaugeage inexistant',
            ]
        ]);

        $gauging->delete();

        $gaugings = $this->get();

        return response()->json([
            'gaugings' => $gaugings,
            'message' => [
                'type' => 'success',
                'content' => 'Jaugeage supprimé avec succès',
            ]
        ]);
    }

    public function proforma(Request $request, $id)
    {
        $gauging = Gauging::find($id);

        $total = 0;
        $problems = [];
        foreach ($gauging->problems as $problem) {
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
                'gauging' => $problem->gauging->ref,
            ]);
        }

        $pdf = PDF::loadView('pdf.proforma', array_merge($gauging->toArray(), [
            'customer' => $gauging->vehicle->customer,
            'problems' => $problems,
            'total' => $total,
        ]));
        return $pdf->download($request->name);
    }
}
