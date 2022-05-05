<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\admin;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/parents',\App\Http\Controllers\ParentUserController::class);
Route::resource('/childs',\App\Http\Controllers\ChildUserController::class);
Route::resource('/cards',\App\Http\Controllers\CardController::class);
Route::resource('/transaction',\App\Http\Controllers\TransactionController::class);
Route::resource('/vendor',\App\Http\Controllers\VendorController::class);
Route::resource('/refunds',\App\Http\Controllers\RefundController::class);

//Route::post("login",[UserController::class,'index']);

Route::post('/parent/child',[\App\Http\Controllers\ParentUserController::class,'storechild']);
Route::post('/parent/save',[\App\Http\Controllers\ParentUserController::class,'store']);
Route::post('/card/save',[\App\Http\Controllers\CardController::class,'store']);
Route::post('/transaction/save',[\App\Http\Controllers\TransactionController::class,'store']);
Route::post('/vendor/save',[\App\Http\Controllers\VendorController::class,'store']);
Route::post('/admin/save',[\App\Http\Controllers\AdminController::class,'store']);
Route::post('/refund/save',[\App\Http\Controllers\RefundController::class,'store']);
Route::post('/admin/approve',[\App\Http\Controllers\AdminController::class,'approve']);
Route::post('/admin/reject',[\App\Http\Controllers\AdminController::class,'reject']);
Route::post('/admin/childapprove',[\App\Http\Controllers\AdminController::class,'childapprove']);
Route::post('/admin/childreject',[\App\Http\Controllers\AdminController::class,'childreject']);


Route::get('/admin/childrequest-status',[\App\Http\Controllers\AdminController::class,'childrequestStatus']);

Route::get('/admin/request-status',[\App\Http\Controllers\AdminController::class,'requestStatus']);
Route::get('/parents/transaction/child/{first_name}',[\App\Http\Controllers\ParentUserController::class,'showtransaction']);
Route::get('/parents/child/{first_name}',[\App\Http\Controllers\ParentUserController::class,'showchild']);
Route::get('transaction/card/{card_number}',[\App\Http\Controllers\TransactionController::class,'showcard']);
Route::get('/admin', [\App\Http\Controllers\AdminController::class,'show']);
Route::get('/admin/{id}', [\App\Http\Controllers\AdminController::class,'showadminid']);
Route::get('/admin/transaction/{id}',[\App\Http\Controllers\AdminController::class,'showtransaction']);
Route::get('/admin/vendor/{id}',[\App\Http\Controllers\AdminController::class,'showvendor']);
Route::get('/admin/refund/{id}',[\App\Http\Controllers\AdminController::class,'showrefund']);
Route::get('/admin/card/{card_number}',[\App\Http\Controllers\AdminController::class,'showcard']);
Route::get('/admin/child/{id}',[\App\Http\Controllers\AdminController::class,'showchild']);
Route::get('/admin/parent/{id}',[\App\Http\Controllers\AdminController::class,'showparent']);

Route::get('/showchild/{card_number}',[\App\Http\Controllers\CardController::class,'showchild']);


Route::put('/parent/update/{id}',[\App\Http\Controllers\ParentUserController::class,'update']);
Route::put('/admin/update/{id}',[\App\Http\Controllers\AdminController::class,'updateData']);


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});