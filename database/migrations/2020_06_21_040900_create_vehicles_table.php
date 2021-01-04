<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('ref')->unique();
            $table->integer('year')->nullable();
            $table->integer('nominal_capacity');
            $table->string('serial_number')->nullable();
            $table->string('chassis_number')->nullable();
            $table->bigInteger('vehicle_type_id')->unsigned()->index();
            $table->bigInteger('builder_id')->unsigned()->index()->nullable();
            $table->bigInteger('customer_id')->unsigned()->index()->nullable();
            $table->bigInteger('gauging_id')->unsigned()->index()->nullable();
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
        Schema::dropIfExists('vehicles');
    }
}
