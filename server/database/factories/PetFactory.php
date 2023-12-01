<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pet>
 */
class PetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'species' => $this->faker->word(),
            'note' => $this->faker->sentence(),
            'birth' => $this->faker->date(),
            'death' => $this->faker->optional()->date(),
        ];
    }
}
