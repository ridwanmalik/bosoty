<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('address');
            $table->string('city');
            $table->string('region');
            $table->string('zip');
            $table->string('country');
            $table->string('description');
            $table->string('image');
            $table->enum('type', ['residential', 'commercial']);
            $table->enum('status', ['available', 'sold', 'rented', 'unavailable', 'booked', 'pending']);
            $table->integer('price');
            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->integer('area');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
};