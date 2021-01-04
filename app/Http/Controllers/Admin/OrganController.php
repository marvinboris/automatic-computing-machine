<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Organ;
use Illuminate\Http\Request;

class OrganController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $organs = [];
        foreach (Organ::get() as $organ) {
            $organs[] = array_merge($organ->toArray(), [
                'actions' => $organ->actions,
            ]);
        }

        return $organs;
    }



    public function index()
    {
        $organs = $this->get();

        return response()->json([
            'organs' => $organs
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Organ::create($request->all());

        $organs = $this->get();

        return response()->json([
            'organs' => $organs,
            'message' => [
                'type' => 'success',
                'content' => 'Organe créé avec succès',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $organ = Organ::find($id);

        if (!$organ) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Organe inexistant',
            ]
        ]);

        $request->validate($this->rules);

        $organ->update($request->all());

        $organs = $this->get();

        return response()->json([
            'organs' => $organs,
            'message' => [
                'type' => 'success',
                'content' => 'Organe modifié avec succès',
            ]
        ]);
    }

    public function destroy($id)
    {
        $organ = Organ::find($id);

        if (!$organ) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Organe inexistant',
            ]
        ]);

        $organ->delete();

        $organs = $this->get();

        return response()->json([
            'organs' => $organs,
            'message' => [
                'type' => 'success',
                'content' => 'Organe supprimé avec succès',
            ]
        ]);
    }
}
