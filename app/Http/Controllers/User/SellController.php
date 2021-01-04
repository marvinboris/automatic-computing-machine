<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Organ;
use App\Sell;
use App\Unit;
use Illuminate\Http\Request;

class SellController extends Controller
{
    private $rules = [
        'price' => 'required|numeric',
        'name' => 'required|string',
        'unit_id' => 'nullable|exists:units,id',
        'organ_id' => 'nullable|exists:organs,id',
    ];

    private function get()
    {
        $sells = [];
        foreach (Sell::get() as $sell) {
            $sells[] = array_merge($sell->toArray(), [
                'unit' => $sell->unit ? $sell->unit->name : '',
                'organ' => $sell->organ ? $sell->organ->name : '',
            ]);
        }

        return $sells;
    }



    public function index()
    {
        $sells = $this->get();
        $organs = Organ::all();
        $units = Unit::all();

        return response()->json([
            'sells' => $sells,
            'organs' => $organs,
            'units' => $units,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Sell::create($request->all());

        $sells = $this->get();

        return response()->json([
            'sells' => $sells,
            'message' => [
                'type' => 'success',
                'content' => 'Vente créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $sell = Sell::find($id);

        if (!$sell) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Vente inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $sell->update($request->all());

        $sells = $this->get();

        return response()->json([
            'sells' => $sells,
            'message' => [
                'type' => 'success',
                'content' => 'Vente modifiée avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $sell = Sell::find($id);

        if (!$sell) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Vente inexistante',
            ]
        ]);

        $sell->delete();

        $sells = $this->get();

        return response()->json([
            'sells' => $sells,
            'message' => [
                'type' => 'success',
                'content' => 'Vente supprimée avec succès',
            ]
        ]);
    }
}
