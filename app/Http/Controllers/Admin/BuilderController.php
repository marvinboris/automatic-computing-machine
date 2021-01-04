<?php

namespace App\Http\Controllers\Admin;

use App\Builder;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BuilderController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $builders = [];
        foreach (Builder::get() as $builder) {
            $builders[] = array_merge($builder->toArray(), [
                'vehicles' => $builder->vehicles,
            ]);
        }

        return $builders;
    }



    public function index()
    {
        $builders = $this->get();

        return response()->json([
            'builders' => $builders
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Builder::create($request->all());

        $builders = $this->get();

        return response()->json([
            'builders' => $builders,
            'message' => [
                'type' => 'success',
                'content' => 'Constructeur créé avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $builder = Builder::find($id);

        if (!$builder) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Constructeur inexistant',
            ]
        ]);

        $request->validate($this->rules);

        $builder->update($request->all());

        $builders = $this->get();

        return response()->json([
            'builders' => $builders,
            'message' => [
                'type' => 'success',
                'content' => 'Constructeur modifié avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $builder = Builder::find($id);

        if (!$builder) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Constructeur inexistant',
            ]
        ]);

        $builder->delete();

        $builders = $this->get();

        return response()->json([
            'builders' => $builders,
            'message' => [
                'type' => 'success',
                'content' => 'Constructeur supprimé avec succès',
            ]
        ]);
    }
}
