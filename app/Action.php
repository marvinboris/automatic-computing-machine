<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    protected $fillable = [
        'price', 'name', 'unit_id', 'organ_id',
    ];

    public function solutions()
    {
        return $this->morphMany('App\Solution', 'solution');
    }

    public function unit()
    {
        return $this->belongsTo('App\Unit');
    }

    public function organ()
    {
        return $this->belongsTo('App\Organ');
    }

    public function sub_actions()
    {
        return $this->hasMany('App\SubAction');
    }
}
