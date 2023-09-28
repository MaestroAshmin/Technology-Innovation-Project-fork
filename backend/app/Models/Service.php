<?php
/**
 * Name: Yujia Xie 
 * Student ID: 104520641
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    //associate the model with the corresponding table in the database
    protected $table = 'service';
    //not manipulate the 'created_at' and 'updated_at' fields
    public $timestamps = false;
    //define the fields which are allowed to add to the database when using create() method
    protected $fillable = [
        'id', 'name', 'type', 'phone', 'email', 'address', 'latitude', 'longitude', 'url'
    ];
}
