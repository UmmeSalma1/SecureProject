<?php

namespace Database\Seeders;

use App\Models\ChildUser;
use App\Models\ParentUser;
use Faker\Factory;
use Faker\Guesser\Name;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChildUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        $parent = ParentUser::all()->random();
        $child = new ChildUser();
        $child->first_name = $faker->firstName;
        $child->last_name = $faker->lastName;
        $child->dob = $faker->dateTime;
        $child->email = $faker->email;
        $child->phone_number = $faker->phoneNumber;
        $child->gender = ['Male', 'Female'][rand(0,1)];
        $child->monthly_limit = [3000, 4000, 5000][rand(0,2)];
        $child->is_approved=['approved','not_approved'][rand(0,1)];
        $child->parent_id = $parent->id;
        $child->save();
    }
}
