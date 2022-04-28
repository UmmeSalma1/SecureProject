<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

  Route::post('/parent_u_s',[\App\Http\Controllers\ParentUserController::class,'store']);
  Route::post('/child_u_s',[\App\Http\Controllers\ChildUserController::class,'store']);
Route::post('/card',[\App\Http\Controllers\CardController::class,'store']);
