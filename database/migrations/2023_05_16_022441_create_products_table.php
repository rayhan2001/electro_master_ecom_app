<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('cat_id');
            $table->integer('subcat_id');
            $table->integer('brand_id');
            $table->integer('unit_id');
            $table->integer('size_id');
            $table->integer('color_id');
            $table->string('product_code');
            $table->string('product_name');
            $table->string('product_price');
            $table->longText('description');
            $table->text('image');
            $table->tinyInteger('status')->default(1);
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
        Schema::dropIfExists('products');
    }
};
