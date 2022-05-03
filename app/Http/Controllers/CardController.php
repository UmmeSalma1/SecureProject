<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use App\Models\Card;
use App\Models\ChildUser;
use Illuminate\Http\Request;
use App\Http\Controllers\ChildUserController;

class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = Card::all();
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
     * @param  \App\Http\Requests\StoreCardRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'card_number' => 'required|integer|digits_between:16,16',
            'exp_date' => 'date',
            'cvv' => 'required|integer|digits_between:3,3',

        ]);
        $x = CardController::showchild($request->get('card_number'));

        $newCard = new Card([
            'card_number'=>$request->get('card_number'),
            'exp_date'=>$request->get('exp_date'),
            'cvv'=>$request->get('cvv'),
        ]);

        $newCard->save();
        $r = array($newCard,$x);

        return response()->json($r);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = Card::all()->where('id','=',$id)->first();
        $rt = $user->card_number;
        $x = $user->child_id;
        $t = ChildUser::all()->where('id','=',$x)->first();
        $n = $t->first_name;
        return response()->json(["Child_Name"=>$n,"Card_Details"=>$user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function edit(Card $card)
    {
       //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCardRequest  $request
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCardRequest $request, Card $card)
    {
        $user = Card::findOrFail($card);

        $request->validate([
            'card_number' => 'required|integer|digits_between:16,16',
            'exp_date' => 'date',
            'cvv' => 'required|integer'
        ]);
        $user->card_number = $request->get('card_number');
        $user->exp_date = $request->get('exp_date');
        $user->cvv = $request->get('cvv');
        $user->save();

        return response()->json($user);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function destroy(Card $card)
    {
        $user = Card::findOrFail($card);
        $user->delete();

        return response()->json($user::all());
    }
    public function showchild($cn){
        $r = Card::all()->where('card_number','=',$cn)->first();
        $x = $r->child_id;
        $t = ChildUser::all()->where('id','=',$x)->first();
        $n = $t->first_name;
        return ($n);

    }
}
