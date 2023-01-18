<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Property/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'city' => 'required',
            'region' => 'required',
            'zip' => 'required',
            'country' => 'required',
            'description' => 'required',
            // 'image' => 'required',
            'type' => 'required',
            // 'status' => 'required',
            'price' => 'required',
            'bedrooms' => 'required',
            'bathrooms' => 'required',
            'area' => 'required',
        ]);

        $property = Property::create($request->all());

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('storage\properties');
            $image->move($destinationPath, $name);
            $property->image =  $destinationPath . '\\' . $name;
            $property->save();
        }

        return Redirect::route('dashboard')->with('success', 'Property created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function show(Property $property)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property $property)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function destroy(Property $property)
    {
        //
    }
}
