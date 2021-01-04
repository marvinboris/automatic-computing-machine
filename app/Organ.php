<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organ extends Model
{
    protected $fillable = [
        'name',
    ];

    public function actions()
    {
        return $this->hasMany('App\Action');
    }

    public function sells()
    {
        return $this->hasMany('App\Sell');
    }
}
