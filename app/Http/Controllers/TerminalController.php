<?php

namespace App\Http\Controllers;

use App\Models\Terminal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TerminalController extends Controller
{
    public function index()
    {
        return Inertia::render('Terminals/Terminals', [
            'message' => session('message'),
        ]);
    }

    public function create(Request $request)
    {
        return Inertia::render('Terminals/TerminalForm');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "code" => ['required', 'string', 'unique:terminals'],
            "number" => ["required", "string"],
            "supplier" => ["required", "string"],
            "title" => ["string"],
        ]);
        Terminal::create($data);
        $message = "Терминал" . $data["code"] . "добавлен";

        return Redirect::route("terminals.index")->with("success", $message);
    }

    public function search(Request $request)
    {
        return Inertia::render("Terminals/TerminalSearch");
    }

    public function searchResponse(Request $request)
    {
        $terminal = Terminal::where(("code"), $request['code'])->first();
        return Inertia::render('Terminals/TerminalSearchResponse');
    }


    public function show(Terminal $terminal)
    {
        $data = Terminal::where($terminal);
        return Inertia::render("Terminals/TerminalSearch", [
            'terminals' => $data,
        ]);
    }

    public function showAllTerminals()
    {
        $terminals = Terminal::paginate(10);
        return Inertia::render('Terminals/Terminals', [
            'terminals' => $terminals
        ]);
    }

    public function edit(Terminal $terminal)
    {

        return Inertia::render('Terminals/TerminalForm', [
            'terminal' => $terminal
        ]);
    }

    public function update(Request $request, Terminal $terminal)
    {
        $data = $request->validate([
            'code' => ['required', 'string', 'unique:terminals,code,' . $terminal->id],
            'number' => ['required', 'string'],
            'supplier' => ['required', 'string'],
            'title' => ['string'],
        ]);

        $terminal->update($data);
        $message = 'Терминал ' . $terminal->code . ' изменен' . $terminal->id;
        return to_route('terminals.all')->with('success', $message);
    }
}
