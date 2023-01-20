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
/*
Route::get('/', function () {
    return view('welcome');
});
*/

Route::get('/', function () {
    return view('hello');
})->name('hello');

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::get('/contacts', function () {
    $data = [
        'contatti' => [
            'Luigi',
            'Marco',
            'Alessia',
            'Zoe',
            'Luca',
            'Marina'
        ]
    ];
    return view('contacts', $data);
})->name('contacts');

Route::get('/store', function () {
    $data = [
        'sedi' => [
            'Milano',
            'Bologna',
            'Rimini',
            'Roma',
            'Napoli',
            'Potenza'
        ]
    ];
    return view('store', $data);
})->name('store');
