<?php

namespace Database\Factories;
use App\Models\ChildUser;
use App\Models\vendor;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
//        $ChildUser = ChildUser::all()->random();
//        $user_id = $ChildUser->id;
//        $pancard = $ChildUser->pancard;
//        $vendor = vendor::all()->random();
//        $vendor_id = $vendor->id;
//        $limit_balance = $transaction->limit_balance;
//
//        $transaction = [
//            'user_id' => $user_id,
//            'vendor_id' => $vendor_id,
//            'monthly_limit'=>$transaction,
//            'transaction_amount' =>$this->faker->numberBetween(0,$limit_balance),
//            'transaction_status' => $this->faker->boolean,
//            'transaction_date' => $this->faker->dateTimeBetween('-2 years'),
//        ];
//        if ($transaction['transaction_status']== true){ $transaction['limit_balance'] = $limit_balance - $transaction['transaction_amount'];}
//        else {$transaction['limit_balance'] = $limit_balance;}
//        return $transaction;


    }


}
