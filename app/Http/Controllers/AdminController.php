<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests\StoreadminRequest;
use App\Http\Requests\UpdateadminRequest;
use App\Models\admin;
use App\Models\Card;
use App\Models\ChildUser;
use App\Models\ParentUser;
use App\Models\refunds;
use App\Models\Transaction;
use App\Models\vendor;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = admin::all();
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
     * @param \App\Http\Requests\StoreadminRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users|email',
            'password' => 'required|string|max:6',
            'phone_number' => 'required|integer|digits_between:12,12',
            'address' => 'required|string',
            'dob' => 'date',
            'joined_date'=>'date',
        ]);
        $newAdmin = new admin([
            'name' => $request->get('name'),
            'phone_number' => $request->get('phone_number'),
            'address'=>$request->get('address'),
            'email'=>$request->get('email'),
            'password'=>$request->get('password'),
            'dob'=>$request->get('dob'),
            'joined_date'=>$request->get('joined_date'),
        ]);

        $newAdmin->save();

        return response()->json($newAdmin);
    }
    /**
     * Display the specified resource.
     *
     * @param \App\Models\admin $admin
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(admin $admin)
    {
       // $admin = admin::where('show','=',$admin)->firstorFail();
        $admin =admin::all();
     //   $admin =admin::findOrFail($admin);
        return response()->json($admin);
    }
    public function showadminid(Request $request,$admin)
    {
        $admin = admin::where('id', '=', $admin)->firstOrFail();
        return response()->json($admin);
}
    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\admin $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateadminRequest $request
     * @param \App\Models\admin $admin
     * @return \Illuminate\Http\Response
     */
    public function updateData(Request $request,$id)
    {
        $admin = admin::findOrFail($id);
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users|email',
            'password' => 'required|string|max:6',
            'phone_number' => 'required|integer|digits_between:12,12',
            'address' => 'required|string',
            'dob' => 'date',
            'joined_date'=>'date',
        ]);
        $admin->name = $request->get('name');
        $admin->email = $request->get('email');
        $admin->password = $request->get('password');
        $admin->phone_number= $request->get('phone_number');
        $admin->address= $request->get('address');
        $admin->dob = $request->get('dob');
        $admin->joined_date = $request->get('joined_date');
        $admin->save();
        return response()->json($admin);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\admin $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(admin $admin)
    {

    }
    public function showparent($parentUser)
    {
        $user = ParentUser::findOrFail($parentUser);
        return response()->json($user);
    }

    public function showchild($childU)
    {
        $user = ChildUser::findOrFail($childU);
        return response()->json($user);
    }

    public function showtransaction($transaction)
    {
        $user = Transaction::findOrFail($transaction);
       // $user = Card::where('id', '=', $transaction)->firstOrFail();

        return response()->json($user);

    }
    public function showcard($card)
    {
        //$user = Card::findOrFail($card);
        $user = Card::where('card_number', '=', $card)->first();
        $cid=$user->child_id;
        $t = ChildUser::all()->where('id','=',$cid)->first();
        $n = $t->first_name;
        return response()->json(["Child_Name"=>$n,"Card-Details"=>$user]);
    }
    public function showrefund( $refund_id)
    {
        $refunds =refunds::findOrFail($refund_id);
        return response()->json($refunds);
    }
    public function showvendor($vendor)
    {
        $vendors = Vendor::findOrFail($vendor);
        return response()->json($vendors);
    }
    public function approve(\Illuminate\Http\Request $request){
        $r = ParentUser::all()->where('id','=',$request->get('user_id'))->first();
//       return $r;
        $rs =$r->is_approved;
//        return $rs;
//        die();
        if($rs == "not_approved"){
            DB::table('parent_users')->
            where('id','=',$request->get('user_id'))
                ->update(['is_approved'=>"approved"]);

            return response()->json("Request Approved");
        }else{
            return response()->json("User is already Approved");
        }

    }

    public function reject(\Illuminate\Http\Request $request){
        $r = ParentUser::all()->where('id','=',$request->get('user_id'))->first();
//        return $r;
        $rs =$r->is_approved;
//        return $rs;
//        die();
        if($rs == "approved"){
            DB::table('parent_users')->
            where('id','=',$request->get('user_id'))
                ->update(['is_approved'=>"not_approved"]);

            return response()->json("User Temp not approved");
        }else{
            return response()->json("Request pending  ");
        }

    }
    public function requestStatus(){
        $users = DB::table('parent_users')
            ->where('is_approved' , '=' , 'not_approved')
            ->get();

        return $users;
    }

    public function childapprove(\Illuminate\Http\Request $request){
        $r = ChildUser::all()->where('id','=',$request->get('child_id'))->first();
//       return $r;
        $rs =$r->is_approved;
//        return $rs;
//        die();
        if($rs == "not_approved"){
            DB::table('child_users')->
            where('id','=',$request->get('child_id'))
                ->update(['is_approved'=>"approved"]);

            return response()->json("Request Approved");
        }else{
            return response()->json("User is already Approved");
        }

    }

    public function childreject(Request $request){
        $r = ChildUser::all()->where('id','=',$request->get('child_id'))->first();
//        return $r;
        $rs =$r->is_approved;
//        return $rs;
//        die();
        if($rs == "approved"){
            DB::table('child_users')->
            where('id','=',$request->get('child_id'))
                ->update(['is_approved'=>"not_approved"]);

            return response()->json("User Temp not approved");
        }else{
            return response()->json("Request pending  ");
        }

    }
    public function childrequestStatus(\Illuminate\Http\Request $request){
        $users = DB::table('child_users')
            ->where('is_approved' , '=' , 'not_approved')
            ->get();

        return $users;
    }
}
