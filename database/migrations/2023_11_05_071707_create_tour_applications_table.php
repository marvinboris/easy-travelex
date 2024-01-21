<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tour_applications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tour_id')->index()->nullable();
            $table->string('name');
            $table->string('customer_type');
            $table->string('country');
            $table->string('persons');
            $table->string('phone');
            $table->text('places')->nullable();
            $table->date('date');
            $table->string('passport');
            $table->tinyInteger('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_applications');
    }
};
