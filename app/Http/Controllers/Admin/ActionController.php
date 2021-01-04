<?php

namespace App\Http\Controllers\Admin;

use App\Action;
use App\Http\Controllers\Controller;
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
            $actions[] = array_merge($action->toArray(), [
                'sub_actions' => $action->sub_actions,
                'unit' => $action->unit ?? $action->unit->name,
                'organ' => $action->organ ?? $action->organ->name,
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

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Action::create($request->all());

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Action créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $action = Action::find($id);

        if (!$action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Action inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $action->update($request->all());

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Action modifiée avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $action = Action::find($id);

        if (!$action) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Action inexistante',
            ]
        ]);

        $action->delete();

        $actions = $this->get();

        return response()->json([
            'actions' => $actions,
            'message' => [
                'type' => 'success',
                'content' => 'Action supprimée avec succès',
            ]
        ]);
    }
}
