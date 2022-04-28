<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChildUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'dob',
        'email',
        'phone_number',
        'gender',
        'monthly_limit',
        'parent_id'
    ];
}
