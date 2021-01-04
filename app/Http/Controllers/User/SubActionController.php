<?php

namespace App\Http\Controllers\User;

use App\Action;
use App\Http\Controllers\Controller;
use App\SubAction;
use Illuminate\Http\Request;

class SubActionController extends Controller
{
    private $rules = [
        'price' => 'required|numeric',
        'name' => 'required|string',
        'unit_id' => 'nullable|exists:units,id',
        'action_id' => 'nullable|exists:actions,id',
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

        return response()->json([
            'actions' => $actions
        ]);
    }

    public function store(Request $request, $action_id)
    {
        $request->validate($this->rules);

        $action = Action::find($action_id);

        if (!$action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Opération inexistante',
            ]
        ]);

        SubAction::create(array_merge($request->all(), [
            'action_id' => $action_id
        ]));

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Sous-opération créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $action_id, $id)
    {
        $action = Action::find($action_id);

        if (!$action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Opération inexistante',
            ]
        ]);

        $sub_action = $action->sub_actions()->find($id);

        if (!$sub_action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Sous-opération inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $sub_action->update($request->all());

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Sous-opération modifiée avec succès',
            ]
        ]);
    }

    public function destroy($action_id, $id)
    {
        $action = Action::find($action_id);

        if (!$action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Opération inexistante',
            ]
        ]);

        $sub_action = $action->sub_actions()->find($id);

        if (!$sub_action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Sous-opération inexistante',
            ]
        ]);

        $sub_action->delete();

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Sous-opération supprimée avec succès',
            ]
        ]);
    }
}
