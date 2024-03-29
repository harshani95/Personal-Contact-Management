<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/v1/contacts', 
[(ContactController::class,'contacts')] -> name('contacts.contact'));

Route::post('/api/v1/contacts/create', 
[(ContactController::class,'add')] -> name('contacts.add'));


