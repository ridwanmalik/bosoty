<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'address' => $this->faker->address,
            'city' => $this->faker->city,
            'region' => $this->faker->state,
            'zip' => $this->faker->postcode,
            'country' => $this->faker->country,
            'description' => $this->faker->text,
            'image' => $this->faker->imageUrl,
            'type' => $this->faker->randomElement(['residential', 'commercial']),
            'status' => $this->faker->randomElement(['available', 'sold', 'rented', 'unavailable', 'booked', 'pending']),
            'price' => $this->faker->numberBetween(100000, 1000000),
            'bedrooms' => $this->faker->numberBetween(1, 5),
            'bathrooms' => $this->faker->numberBetween(1, 5),
            'area' => $this->faker->numberBetween(100, 1000),
        ];
    }
}
