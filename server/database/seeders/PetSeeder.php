<?php

namespace Database\Seeders;

use App\Models\Pet;
use Database\Factories\PetFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pet::factory(5)->create();
    }
}
