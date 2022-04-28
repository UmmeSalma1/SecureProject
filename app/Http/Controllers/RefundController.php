<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorerefundsRequest;
use App\Http\Requests\UpdaterefundsRequest;
use App\Models\refunds;
use App\Models\Transaction;
use Faker\Factory;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\DB;

class RefundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $refunds = refunds::all();
        return response()->json($refunds);
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
     * @param  \App\Http\Requests\StorerefundsRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
//    public function store(\Illuminate\Http\Request $request)
//    {
//        $request->validate([
//            'transaction_id'=>'required|string',
//            'refund_amount'=>'required|integer',
//            'refund_status'=>'required|boolean',
//            'refund_date'=>'required|date',
//        ]);
//        $newRefund = new refunds([
//           'transaction_id'=>$request->get('transaction_id'),
//           'refund_amount'=>$request->get('refund_amount'),
//           'refund_status'=>$request->get('refund_status'),
//            'refund_date'=>$request->get('refund_date'),
//        ]);
//        $newRefund->save();
//        return response()->json($newRefund);
//    }
    public function store(Request $request)
    {
        $faker=Factory::create();
        $request->validate([
            'transaction_id'=>'required|integer',
        ]);
        $trans_id=$request->get('transaction_id');
        $transaction = Transaction::all()->where('id', '=', $trans_id)->first();
        $cdnum = $transaction->card_number;
        $vdnm = $transaction->vendor_name;
        $refund = refunds::all()->where('transaction_id', '=', $trans_id)->first();
        $rid = $refund->id;
        $amount = $refund->refund_amount;
        $status = $refund->refund_status;
        $rt = DB::table('transactions')->select('limit_balance')
            ->where('card_number','=',$cdnum)
            ->orderBy('transaction_date','desc')->first();
        $rs = $rt->credit_balance;
        echo($rs);
        DB::table('transactions')->insert([
            'id'=>$rid,
            'card_number' =>$vdnm,
            'vendor_name' => $cdnum,
            'transaction_type'=>'refund',
            'transaction_amount' => $amount,
            'transaction_status' => $status,
            'transaction_date' => now(),
            'limit_balance'=> (int)$this->summ($rs, $amount)

        ]);
        if($status ==1){return response()->json(["status"=>"Transaction Recorded and Amount Refund"]);}
        return response()->json(["status"=>"Transaction Recorded and Amount Not Refunded"]);




    }
    function summ($b,$c)
    {
        return $b + $c;


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\refunds  $refunds
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(refunds $refund_id)
    {
        $refunds =refunds::findOrFail($refund_id);
        return response()->json($refunds);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\refunds  $refunds
     * @return \Illuminate\Http\Response
     */
    public function edit(refunds $refunds)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdaterefundsRequest  $request
     * @param  \App\Models\refunds  $refunds
     * @return \Illuminate\Http\Response
     */
    public function update(UpdaterefundsRequest $request, refunds $refunds)
    {
        $refunds = refunds::findOrFail($refunds);

        $request->validate([
            'transaction_id'=>'required|string',
            'refund_amount'=>'required|interger',
            'refund_status'=>'required|boolean',
            'refund_date'=>'required|date|timestamp',
        ]);

        $refunds->transaction_id=$request->get('transaction_id');
        $refunds->refund_amount=$request->get('refund_amount');
        $refunds->refund_status=$request->get('refund_status');
        $refunds->refund_date=$request->get('refund_date');
        $refunds->save();

        return response()->json($refunds);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\refunds  $refunds
     * @return \Illuminate\Http\Response
     */
    public function destroy(refunds $refunds)
    {
        //
    }
}
