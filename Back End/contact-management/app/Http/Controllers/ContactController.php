<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function add(Request $request){{
        $customer = $request -> validate([
            'name'=>'required',
            'address'=>'required',
            'contact'=>'required',
            'note'
        ]);

        $saveData = Contact::create($contact);
    }}
}
