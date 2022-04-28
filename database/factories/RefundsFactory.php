<?php

namespace Database\Factories;
use App\Models\Transaction;
use App\Models\ChildUser;
use Illuminate\Database\Eloquent\Factories\Factory;

class RefundsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $transaction = Transaction::all()->random();
        $trans_id = $transaction->id;
        $trans_amount=$transaction->transaction_amount;
        $transaction_status = $transaction->status;
        $transaction_date = $transaction->transaction_date;
        if($transaction_status == false){
            $refund = [
                'transaction_id'=> $trans_id,
                'refund_amount'=>$trans_amount,
                'refund_date'=>$this->faker->dateTimeBetween($transaction_date,'+1 week')
            ];
        }
        return $refund;
    }
}
