<?php

use App\Http\Controllers\ChatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LogTestController;
use App\Http\Controllers\FaqController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//tungle-routes
Route::post('/logTest', [LogTestController::class, 'logTest']);
Route::post('/addFaq', [FaqController::class, 'addFaq']);
Route::get('/listFaq', [FaqController::class, 'listFaq']);
Route::delete('/deleteFaq/{id}', [FaqController::class, 'deleteFaq']);
Route::get('/getFaq/{id}', [FaqController::class, 'getFaq']);
Route::post('/updateFaq/{id}', [FaqController::class, 'updateFaq']);
Route::get('/searchFaq/{key}', [FaqController::class, 'searchFaq']);
Route::post('/chat', [ChatController::class, 'chat']);