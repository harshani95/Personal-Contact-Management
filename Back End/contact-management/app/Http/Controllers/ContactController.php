<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function add(Request $request)
    {
        $customer = $request->validate([
            'name' => 'required',
            'address' => 'required',
            'contact' => 'required',
            'note' => 'nullable|string', 
        ]);

        $saveData = Contact::create($customer); 
        return response()->json($saveData, 201); 
    }
}
