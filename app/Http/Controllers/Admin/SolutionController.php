<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Solution;
use Illuminate\Http\Request;

class SolutionController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $solutions = [];
        foreach (Solution::get() as $solution) {
            $solutions[] = array_merge($solution->toArray(), [
                'problem' => $solution->problem,
            ]);
        }

        return $solutions;
    }



    public function index()
    {
        $solutions = $this->get();

        return response()->json([
            'solutions' => $solutions
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Solution::create($request->all());

        $solutions = $this->get();

        return response()->json([
            'solutions' => $solutions,
            'message' => [
                'type' => 'success',
                'content' => 'Solution créée avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $solution = Solution::find($id);

        if (!$solution) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Solution inexistante',
            ]
        ]);

        $request->validate($this->rules);

        $solution->update($request->all());

        $solutions = $this->get();

        return response()->json([
            'solutions' => $solutions,
            'message' => [
                'type' => 'success',
                'content' => 'Solution modifiée avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $solution = Solution::find($id);

        if (!$solution) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Solution inexistante',
            ]
        ]);

        $solution->delete();

        $solutions = $this->get();

        return response()->json([
            'solutions' => $solutions,
            'message' => [
                'type' => 'success',
                'content' => 'Solution supprimée avec succès',
            ]
        ]);
    }
}
