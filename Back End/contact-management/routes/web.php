<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController; 

Route::get('/', function () {
    return view('welcome');
});


Route::get('/api/v1/contacts/get-all-contacts', [ContactController::class, 'getAll'])->name('contacts.getAll');

Route::post('/api/v1/contacts/create', [ContactController::class, 'add'])->name('contacts.add');

Route::delete('/api/v1/contacts/delete/{id}', [ContactController::class, 'delete'])->name('contacts.delete');

?>


