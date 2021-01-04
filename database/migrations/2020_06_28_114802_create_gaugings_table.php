<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGaugingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gaugings', function (Blueprint $table) {
            $table->id();
            $table->string('ref')->unique();
            $table->date('date');
            $table->float('nominal_capacity');
            $table->float('gap_distance');
            $table->float('average_centimetric_volume');
            $table->float('total_height');
            $table->float('total_capacity');
            $table->longText('measures');
            $table->bigInteger('gauging_id')->unsigned()->index()->nullable();
            $table->bigInteger('vehicle_id')->unsigned()->index();
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
        Schema::dropIfExists('gaugings');
    }
}
