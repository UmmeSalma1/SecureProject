<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class refunds extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'refund_amount',
        'refund_status',
        'refund_date',

    ];

}
