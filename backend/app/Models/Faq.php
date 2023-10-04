<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use HasFactory;

    // specify name of the table
    protected $table = 'faq';

    // specify primary key of the table
    protected $primaryKey = 'faq_id';
    public $timestamps=false;
}
