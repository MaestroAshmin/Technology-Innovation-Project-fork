<?php
/**
 * Name: Yujia Xie 
 * Student ID: 104520641
 */
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('user', function (Blueprint $table) {
            $table->increments('user_id');  //primary key
            $table->string('email',254)->unique()->notNull();  //email can't be null
            $table->string('password',20)->notNull();   //password can't be null
            $table->string('name',40)->nullable();
            $table->integer('age')->nullable();
            $table->string('gender',20)->nullable();
            $table->string('nationality',20)->nullable();
            $table->integer('postcode')->nullable();
            $table->integer('role')->notNull();  //0-user, 1-admin  role can't be null
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
        Schema::dropIfExists('user');
    }
}
