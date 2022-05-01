<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreParentURequest;
use App\Http\Requests\UpdateParentURequest;
use App\Models\Card;
use App\Models\ChildUser;
use App\Models\ParentUser;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\String_;

class ParentUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $comments = ParentUser::all();
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
     * @param  \App\Http\Requests\StoreParentURequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'phone_number' => 'required|integer|digits_between:12,12',
            'address' => 'required|string',
            'pan_card' => 'required|regex:/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/',
            'email' => 'required|string|unique:users|email',
            'password' => 'required|string|max:25',
            'gender'=>'required|String',

        ]);

        $newUser = new ParentUser([
            'name' => $request->get('name'),
            'phone_number' => $request->get('phone_number'),
            'address'=>$request->get('address'),
            'pan_card'=>$request->get('pan_card'),
            'email'=>$request->get('email'),
            'password'=>$request->get('password'),
            'gender'=>$request->get('gender'),
            'is_approved'=>'not-approved',
        ]);

        $newUser->save();

        return response()->json($newUser);
    }

    /**
     * Display the specified resource.
     *
     * @param $parentUser
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($parentUser)
    {
        $user = ParentUser::findOrFail($parentUser);
        return response()->json($user);
    }
    public function showchild($name)
    {
        $ChildUsers = ChildUser::all()->where('first_name','=',$name)->first();
        $ChildUser = $ChildUsers->id;
        $user = ChildUser::findOrFail($ChildUser);
        return response()->json($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ParentUser  $parentUser
     * @return \Illuminate\Http\Response
     */


    /**
     * Show the form for editing the specified resource.
     *
     * @param ParentUser $parentUser
     * @return \Illuminate\Http\Response
     */
    public function edit(ParentUser $parentUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateParentURequest  $request
     * @param  \App\Models\ParentUser  $parentUser
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $user = ParentUser::findOrFail($id);

        $request->validate([
            'name' => 'string',
            'phone_number' => 'integer|digits_between:12,12',
            'address' => 'string',
            'pan_card' =>'regex:/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/',
            'email' => 'string|unique:users|email',
            'password' => 'string|max:25',
            'gender'=>'string',

        ]);


        $user->name = $request->get('name');
        $user->phone_number= $request->get('phone_number');
        $user->address = $request->get('address');
        $user->pan_card= $request->get('pan_card');
        $user->email = $request->get('email');
        $user->password = $request->get('password');
        $user->gender = $request->get('gender');
        $user->save();

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ParentUser  $parentUser
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(ParentUser $parentUser)
    {
        $user = ParentUser::findOrFail($parentUser);
        $user->delete();

        return response()->json($user::all());
    }
    public  function showtransaction($user)
    {

        $child = ChildUser::all()->where('first_name','=',$user)->first();
      $id = $child->id;
        $card = $child->card_number;
        $cards = Card::all()->where('child_id','=',$id)->first();
        $cardNum = $cards->card_number;
        $transaction = DB::table('transactions')->select('vendor_name', 'transaction_amount',
            'transaction_date', 'transaction_status')->where('card_number', '=', $cardNum)->get();

        return response()->json($transaction);

    }
    public function storechild(\Illuminate\Http\Request $request)
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'dob' => 'date',
            'email' => 'required|string|unique:users|email',
            'phone_number' => 'required|integer|digits_between:12,12',
            'gender'=>'required|String',
            'monthly_limit'=>'required|integer',
            'parent_id'=>ParentUser::all()->random()->pluck('id')

        ]);

        $newUser = new ChildUser([
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'dob'=>$request->get('dob'),
            'email'=>$request->get('email'),
            'phone_number' => $request->get('phone_number'),
            'gender'=>$request->get('gender'),
            'monthly_limit'=>$request->get('monthly_limit'),
            'parent_id'=>$request->get('parent_id')
        ]);

        $newUser->save();

        return response()->json($newUser);
    }

}
