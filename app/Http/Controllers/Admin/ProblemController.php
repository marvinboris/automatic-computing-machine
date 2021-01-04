<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Problem;
use Illuminate\Http\Request;

class ProblemController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $problems = [];
        foreach (Problem::get() as $problem) {
            $problems[] = array_merge($problem->toArray(), [
                'solutions' => $problem->solutions,
                'maintenance' => $problem->maintenance,
            ]);
        }

        return $problems;
    }



    public function index()
    {
        $problems = $this->get();

        return response()->json([
            'problems' => $problems
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Problem::create($request->all());

        $problems = $this->get();

        return response()->json([
            'problems' => $problems,
            'message' => [
                'type' => 'success',
                'content' => 'Problème créé avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $problem = Problem::find($id);

        if (!$problem) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Problème inexistant',
            ]
        ]);

        $request->validate($this->rules);

        $problem->update($request->all());

        $problems = $this->get();

        return response()->json([
            'problems' => $problems,
            'message' => [
                'type' => 'success',
                'content' => 'Problème modifié avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $problem = Problem::find($id);

        if (!$problem) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Problème inexistant',
            ]
        ]);

        $problem->delete();

        $problems = $this->get();

        return response()->json([
            'problems' => $problems,
            'message' => [
                'type' => 'success',
                'content' => 'Problème supprimé avec succès',
            ]
        ]);
    }
}
