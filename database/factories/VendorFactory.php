<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VendorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->name,
            'email'=>$this->faker->email,
            'password'=>$this->faker->password,
            'phone_number'=>$this->faker->phoneNumber,
            'address'=>$this->faker->address,
        ];
    }
}
