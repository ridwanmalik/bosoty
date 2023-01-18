<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $properties = Property::latest()->paginate(100)->withQueryString();
        return Inertia::render('Dashboard', [
            'properties' => $properties,
        ]);
    }
}
