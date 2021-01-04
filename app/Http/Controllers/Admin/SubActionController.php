<?php

namespace App\Http\Controllers\Admin;

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
        $sub_actions = [];
        foreach (SubAction::get() as $sub_action) {
            $sub_actions[] = array_merge($sub_action->toArray(), [
                'unit' => $sub_action->unit ?? $sub_action->unit->name,
                'action' => $sub_action->action ?? $sub_action->action->name,
            ]);
        }

        return $sub_actions;
    }



    public function index()
    {
        $sub_actions = $this->get();

        return response()->json([
            'sub_actions' => $sub_actions
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        SubAction::create($request->all());

        $sub_actions = $this->get();

        return response()->json([
            'sub_actions' => $sub_actions,
            'message' => [
                'type' => 'success',
                'content' => 'Sous-action créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $sub_action = SubAction::find($id);

        if (!$sub_action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Sous-action inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $sub_action->update($request->all());

        $sub_actions = $this->get();

        return response()->json([
            'sub_actions' => $sub_actions,
            'message' => [
                'type' => 'success',
                'content' => 'Sous-action modifiée avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $sub_action = SubAction::find($id);

        if (!$sub_action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Sous-action inexistante',
            ]
        ]);

        $sub_action->delete();

        $sub_actions = $this->get();

        return response()->json([
            'sub_actions' => $sub_actions,
            'message' => [
                'type' => 'success',
                'content' => 'Sous-action supprimée avec succès',
            ]
        ]);
    }
}
