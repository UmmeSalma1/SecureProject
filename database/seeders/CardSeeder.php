<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\ChildUser;
use Illuminate\Database\Seeder;
use Faker\Factory;
use Faker\Guesser\Name;
use Illuminate\Support\Facades\DB;

class CardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        $child = ChildUser::all()->random();
        $card = new Card();
        $card->child_id = $child->id;
        //$card->child_name =$child->first_name;
        $card->card_number=$faker->creditCardNumber;
        $card->exp_date=$faker->creditCardExpirationDate;
        $card->cvv=$faker->numberBetween(100,999);
        $card->save();
    }
}
