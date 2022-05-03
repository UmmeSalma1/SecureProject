<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChildUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('child_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parent_id')->nullable()->constrained('parent_users');
            $table->string('first_name');
            $table->string('last_name');
            $table->date('dob');
            $table->string('email');
            $table->string('phone_number');
            $table->string('gender');
            $table->integer('monthly_limit');
            $table->string('is_approved');
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
        Schema::dropIfExists('child_users');
    }
}
