<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class ParentUser extends Model
{
    use HasApiTokens, HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'password',
        'address',
        'gender',
        'pan_card',
        'is_approved',
    ];
    protected $hidden =[
        'password',
        'remember_token'
    ];
    protected $casts = [
        'email_verified_at'=> 'datetime',
    ];
}
