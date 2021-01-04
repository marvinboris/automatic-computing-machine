<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
    protected $fillable = [
        'name', 'maintenance_id',
    ];

    public function maintenance()
    {
        return $this->belongsTo('App\Maintenance');
    }

    public function solutions()
    {
        return $this->hasMany('App\Solution');
    }
}
