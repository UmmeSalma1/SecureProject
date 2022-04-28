<?php

namespace Database\Seeders;

use App\Models\vendor;
use Illuminate\Database\Seeder;
use Faker\Factory;

class VendorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        $vendor = new vendor();
        $vendor->name = $faker->firstName;
        $vendor->email = $faker->email;
        $vendor->phone_number = $faker->phoneNumber;
        $vendor->password = $faker->password;
        $vendor->address = $faker-> address;
        $vendor->save();
     // Vendor::factory(4)->create();

    }
}
