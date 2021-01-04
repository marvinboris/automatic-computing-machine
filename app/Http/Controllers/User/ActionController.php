<?php

namespace App\Http\Controllers\User;

use App\Action;
use App\Http\Controllers\Controller;
use App\Organ;
use App\Unit;
use Illuminate\Http\Request;

class ActionController extends Controller
{
    private $rules = [
        'price' => 'required|numeric',
        'name' => 'required|string',
        'unit_id' => 'nullable|exists:units,id',
        'organ_id' => 'nullable|exists:organs,id',
    ];

    private function get()
    {
        $actions = [];
        foreach (Action::get() as $action) {
            $sub_actions = [];
            foreach ($action->sub_actions as $sub_action) {
                $sub_actions[] = array_merge($sub_action->toArray(), [
                    'unit' => $sub_action->unit ? $sub_action->unit->name : '',
                    'action' => $sub_action->action ? $sub_action->action->name : '',
                ]);
            }

            $actions[] = array_merge($action->toArray(), [
                'sub_actions' => $sub_actions,
                'unit' => $action->unit ? $action->unit->name : '',
                'organ' => $action->organ ? $action->organ->name : '',
            ]);
        }

        return $actions;
    }



    public function index()
    {
        $actions = $this->get();
        $organs = Organ::all();
        $units = Unit::all();

        return response()->json([
            'actions' => $actions,
            'organs' => $organs,
            'units' => $units,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Action::create($request->all());

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Opération créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $action = Action::find($id);

        if (!$action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Opération inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $action->update($request->all());

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Opération modifiée avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $action = Action::find($id);

        if (!$action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Opération inexistante',
            ]
        ]);

        $action->delete();

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Opération supprimée avec succès',
            ]
        ]);
    }
}
