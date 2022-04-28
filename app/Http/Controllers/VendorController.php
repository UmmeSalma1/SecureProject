<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorevendorRequest;
use App\Http\Requests\UpdatevendorRequest;
use App\Models\vendor;
use http\Client\Request;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $vendors = Vendor::all();
        return response()->json($vendors);
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorevendorRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(\Illuminate\Http\Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string|max:8',
            'phone_number' => 'required|integer|digits_between:12,12',
            'address' => 'required|string',
        ]);

        $newvendor = new Vendor([
            'name' => $request->get('name'),
            'email'=>$request->get('email'),
            'password'=>$request->get('password'),
            'phone_number' => $request->get('phone_number'),
            'address'=>$request->get('address'),

        ]);

        $newvendor->save();

        return response()->json($newvendor);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\vendor  $vendor
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(vendor $vendor)
    {
        $vendors = Vendor::findOrFail($vendor);
        return response()->json($vendors);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\vendor  $vendor
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(vendor $vendor)
    {
        $vendors = Vendor::findOrFail($vendor);
        return response()->json($vendors);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatevendorRequest  $request
     * @param  \App\Models\vendor  $vendor
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdatevendorRequest $request, vendor $vendor)
    {
        $vendor = Vendor::findOrFail($vendor);
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users|email',
            'password' => 'required|string|max:8',
            'phone_number' => 'required|integer|digits_between:12,12',
            'address' => 'required|string',
        ]);
        $vendor->name = $request->get('name');
        $vendor->email = $request->get('email');
        $vendor->password=$request->get('password');
        $vendor->phone_number = $request->get('phone_number');
        $vendor->address = $request->get('address');

        $vendor->save();

        return response()->json($vendor);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vendor  $vendor
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(vendor $vendor)
    {
        $vendor = Vendor::findOrFail($vendor);
        $vendor->delete();

        return response()->json($vendor::all());
    }
}
