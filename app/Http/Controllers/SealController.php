<?php

namespace App\Http\Controllers;

use App\Models\Seal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SealController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Seal::query();

        if (request("code")) {
            $query->where("code", request("code"));
        }

        $seals = $query->paginate(10);
        return Inertia::render("Seals/Seals", [
            'seals' => $seals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Seals/SealForm");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'code' => ['required', 'string'],
            "number" => ["required", "string"],
            "supplier" => ["required", "string"],
            "title" => ["string"],
        ]);
        $seal = Seal::create($data);
        return to_route("seals.index")->with("success", "Ujnjdj");
    }

    /**
     * Display the specified resource.
     */
    public function show(Seal $seal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Seal $seal)
    {
        return Inertia::render("Seals/SealForm", [
            'seal' => $seal
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Seal $seal)
    {
        $data = $request->validate([
            'code' => ['required', 'string', 'unique:seals,code,' . $seal->id],
            'number' => ['required', 'string'],
            'supplier' => ['required', 'string'],
            'title' => ['string'],
        ]);

        $seal->update($data);
        return to_route('seals.index')->with('success', '');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seal $seal)
    {
        //
    }

    public function render()
    {
        return Inertia::render("Seals/Seals");
    }
}
