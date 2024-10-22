<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact; 


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
        
        return response()->json([
            'message' => 'Contact created successfully',
            'data' => $saveData,
        ], 201); 
    }

    public function getAll(Request $request)
    {
        $contacts = Contact::all();
        return response()->json([
            'message' => 'Contacts retrieved successfully',
            'data' => $contacts,
        ], 200); 
    }

    public function delete($id)
    {
        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json([
                'message' => 'Contact not found',
            ], 404);
        }

        $contact->delete();

        return response()->json([
            'message' => 'Contact deleted successfully',
        ], 200);
    }
}
