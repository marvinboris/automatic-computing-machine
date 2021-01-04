<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Maintenance extends Model
{
    protected $fillable = [
        'ref', 'date', 'days', 'delivery_date', 'real_end_date', 'real_start_date', 'vehicle_id',
    ];

    public function vehicle()
    {
        return $this->belongsTo('App\Vehicle');
    }

    public function problems()
    {
        return $this->hasMany('App\Problem');
    }
}
