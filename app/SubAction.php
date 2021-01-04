<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubAction extends Model
{
    protected $fillable = [
        'price', 'name', 'unit_id', 'action_id',
    ];

    public function unit()
    {
        return $this->belongsTo('App\Unit');
    }

    public function action()
    {
        return $this->belongsTo('App\Action');
    }
}
