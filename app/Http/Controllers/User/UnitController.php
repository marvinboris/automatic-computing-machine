<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'description' => 'nullable|string',
    ];

    private function get()
    {
        $units = [];
        foreach (Unit::get() as $unit) {
            $units[] = array_merge($unit->toArray(), [
                'actions' => $unit->actions,
            ]);
        }

        return $units;
    }



    public function index()
    {
        $units = $this->get();

        return response()->json([
            'units' => $units
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Unit::create($request->all());

        $units = $this->get();

        return response()->json([
            'units' => $units,
            'message' => [
                'type' => 'success',
                'content' => 'Unité créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $unit = Unit::find($id);

        if (!$unit) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Unité inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $unit->update($request->all());

        $units = $this->get();

        return response()->json([
            'units' => $units,
            'message' => [
                'type' => 'success',
                'content' => 'Unité modifiée avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $unit = Unit::find($id);

        if (!$unit) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Unité inexistante',
            ]
        ]);

        $unit->delete();

        $units = $this->get();

        return response()->json([
            'units' => $units,
            'message' => [
                'type' => 'success',
                'content' => 'Unité supprimée avec succès',
            ]
        ]);
    }
}
