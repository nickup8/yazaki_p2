<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SealController;
use App\Http\Controllers\TerminalController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/terminals', [TerminalController::class, 'index'])->middleware('auth')->name('terminals.index');
Route::get('/terminals/add', [TerminalController::class, 'create'])->middleware('auth')->name('terminals.create');
Route::post('/terminals/store', [TerminalController::class, 'store'])->middleware('auth')->name('terminals.store');
Route::get('/terminals/search', [TerminalController::class, 'search'])->middleware('auth')->name('terminals.search');
Route::get("/terminals/all", [TerminalController::class, "showAllTerminals"])->middleware("auth")->name('terminals.all');
Route::get("/terminals/edit/{terminal}", [TerminalController::class, "edit"])->middleware("auth")->name('terminals.edit');
Route::put("/terminals/update/{terminal}", [TerminalController::class, "update"])->middleware("auth")->name('terminals.update');
Route::get('/terminals/search?code={code}', [TerminalController::class, 'searchResponse'])->middleware('auth')->name('terminals.searchResponse');

Route::get('/seals', [SealController::class, 'render'])->middleware('auth')->name('seals');
Route::get('seals/all', [SealController::class, 'index'])->middleware('auth')->name('seals.index');
Route::get('/seals/create', [SealController::class, 'create'])->middleware('auth')->name('seals.create');
Route::post("/seals/store", [SealController::class, 'store'])->middleware('auth')->name('seals.store');
Route::get("/seals/edit/{seal}", [SealController::class, "edit"])->middleware("auth")->name('seals.edit');
Route::put('/seals/update/{seal}', [SealController::class, 'update'])->middleware('auth')->name('seals.update');
require __DIR__ . '/auth.php';
