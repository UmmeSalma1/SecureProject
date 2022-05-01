<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email'=>$this->faker->unique()->email,
            'phone_number'=>$this->faker->phoneNumber,
            'password'=>$this->faker->unique()->password,
            'address'=>$this->faker->address,
            'dob'=>$this->faker->dateTime,
            'joined_date'=>$this->faker->dateTime,
        ];
    }
}
