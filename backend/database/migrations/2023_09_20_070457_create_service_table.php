<?php
/**
 * Name: Yujia Xie 
 * Student ID: 104520641
 */
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('service', function (Blueprint $table) {
            $table->increments('id');  //primary key
            $table->string('name',100)->notNull();   //service name can't be null
            $table->string('type',10)->notNull();   //service type can't be null
            $table->string('phone',20)->nullable();
            $table->string('email',254)->nullable();
            $table->string('address',100)->nullable();   
            $table->decimal('latitude',10,7)->nullable();   
            $table->decimal('longitude',10,7)->nullable();   
            $table->string('url',100)->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('service');
    }
}
