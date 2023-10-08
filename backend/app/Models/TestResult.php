<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestResult extends Model
{
    use HasFactory;

    protected $table = 'test_result';
    protected  $primaryKey = 'test_result_id';
    public $timestamps=false;
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

}
