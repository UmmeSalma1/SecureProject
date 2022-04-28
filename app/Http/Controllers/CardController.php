<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use App\Models\Card;
use Illuminate\Http\Request;

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
            'cvv' => 'required|integer|digits_between:3,3'
        ]);

        $newCard = new Card([
            'card_number'=>$request->get('card_number'),
            'exp_date'=>$request->get('exp_date'),
            'cvv'=>$request->get('cvv'),
        ]);

        $newCard->save();

        return response()->json($newCard);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function show(Card $card)
    {
        $user = Card::findOrFail($card);
        return response()->json($user);
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
}
