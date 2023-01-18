<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'city',
        'region',
        'zip',
        'country',
        'description',
        'image',
        'type',
        // 'status',
        'price',
        'bedrooms',
        'bathrooms',
        'area',
    ];
}
