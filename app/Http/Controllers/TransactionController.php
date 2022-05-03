<?php

namespace App\Http\Controllers;


use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Models\Card;
use App\Models\Transaction;
use Faker\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = Transaction::all();
       return response()->json($comments);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTransactionRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
//    public function store(\Illuminate\Http\Request $request)
//    {
//        $request->validate([
//            'card_number'=>'required|integer',
//            'vendor_name'=>'required|string',
//            'transaction_amount'=> 'required|integer',
//            'limit_balance'=> 'required|integer',
//            'transaction_status'=>'required|boolean',
//            'transaction_date'=>'required|date'
//        ]);
//
//        $newTransaction = new Transaction([
//
//            'card_number'=>$request->get('card_number'),
//            'vendor_name'=>$request->get('vendor_name'),
//            'transaction_amount'=>$request->get('transaction_amount'),
//            'limit_balance'=>$request->get('limit_balance'),
//            'transaction_status'=>$request->get('transaction_status'),
//            'transaction_date'=>$request->get('transaction_date')
//        ]);
//
//        $newTransaction->save();
//
//        return response()->json($newTransaction);
//    }


    public function store(\Illuminate\Http\Request $request)
    {
        $faker = Factory::create();

        $request->validate([
            'card_number'=>'required|integer',
            'vendor_name'=>'required|string',
            'transaction_amount'=>'required|integer'
        ]);
        $rt = DB::table('transactions')->select('limit_balance')
            ->where('card_number','=',$request->get('card_number'))
            ->orderBy('transaction_date','desc')->first();

        $r = $rt->limit_balance;


        DB::table('transactions')->insert([
            'card_number' =>$request->get('card_number'),
            'vendor_name' => $request->get('vendor_name'),
            'transaction_type'=>['Debit','Credit','Refund'][rand(0,2)],
            'transaction_amount' => $tr = $request->get('transaction_amount'),
            'transaction_status' => $ts = rand(0,1),
            'transaction_date' => now(),
            'limit_balance'=> $this->diff($r,$tr)

        ]);
        if($ts ==1){return response()->json(["status"=>"Transaction Recorded and Successful"]);}
        return response()->json(["status"=>"Transaction Recorded and Failed"]);




    }

    function diff($b,$c)
    {
        if(($b > $c) &&($b > 1)){
            return $b -$c;
        }
        else{
            return $b;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        $user = Transaction::findOrFail($transaction);
       return response()->json($user);

    }
    public function showcard(Request $request,$card)
    {
        //print_r($card);exit;
        //var_dump($card);exit;
        $user = Card::where('card_number', '=', $card)->firstOrFail();
        //$user = Card::findOrFail($card);
        return response()->json($user);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTransactionRequest  $request
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       $user = Transaction::findOrFail($id);

//        $request->validate([
//            'card_number'=>'integer',
//            'vendor_name'=>'string',
//            'transaction_amount'=> 'integer',
//            'limit_balance'=> 'integer',
//            'transaction_status'=>'boolean',
//            'transaction_date'=>'date'
//        ]);
//        $user-> card_number = $request->get('card_number');
//        $user->vendor_name= $request->get('vendor_name');
//        $user->transaction_amount = $request->get('transaction_amount');
//        $user->limit_balance= $request->get('limit_balance');
//        $user->transaction_status = $request->get('transaction_status');
//        $user->transaction_date = $request->get('transaction_date');

        $user->transaction_status =(bool)$request->get('transaction_status');

        $user->save();

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        $user = Transaction::findOrFail($transaction);
        $user->delete();

        return response()->json($user::all());
    }
}
