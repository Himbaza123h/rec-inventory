<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;
    protected $fillable = [
        'product',
        'client',
        'brand',
        'item_code',
        'price',
        'discount',
        'qty',
        'color',
        'customer_name',
        'contact',
        'vat',
        'operation_notes',
    ];

    public function getTotalAttribute()
    {
        return $this->price * $this->qty;
    }
}
