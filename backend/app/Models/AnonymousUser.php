<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnonymousUser extends Model
{
    use HasFactory;

    // specify the primary key of the table
    protected $primaryKey='anonymous_user_id';
    
    // mass-assignment fields
    protected $fillable = [
        'ip_address',
        'last_visited'
    ];
}
