<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\ChildUser;
use App\Models\Transaction;
use App\Models\vendor;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class TransactionSeeder extends Seeder
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
        $id = $child->id;
        $limits= DB::table('child_users')->select('monthly_limit')->where('id','=',$id)->first();
        $ls = $limits->monthly_limit;

        $card=Card::all()->random();
        $vendor = vendor::all()->random();
        $transaction = new Transaction();
        $transaction->card_number = "4024007136841839";
        $transaction->vendor_name = $vendor->name;
       $t= $transaction->transaction_amount = $faker->numberBetween(1000,5000);
        $ts= $transaction->transaction_status=rand(0,1);

        $transaction->transaction_date = $faker->date();
        $ty = $transaction->transaction_type =['Debit','Credit','Refund'][rand(0,2)];
        $transaction->limit_balance = $this->limit($ts,$ls,$t);

        $transaction->save();
    }

    function limit($a, $b, $c){
        if (($a==1)and ($b>$c)){
            return $b-$c;
        }
        return $b;
    }
}
