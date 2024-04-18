<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;
    protected $fillable = [
        'invoice_number',
        'payment_method',
        'customer_name',
        'customer_address',
        'customer_phone',
        'vat',
        'operation_notes',
    ];
}
