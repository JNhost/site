<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;

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

/*
 Route::get('/', function () {
    return view('home');
});
*/

// Home
Route::get('/', [ContactFormController::class, 'contact'])->name('contact');
Route::post('/', [ContactFormController:: class, 'contactPost'])->name('contactPost');

/*
//Projects 
Route::get('/projects', function () {
    return view('projects');
}); 


//Services
Route::get('/services', function () {
    return view ('services');
});
*/