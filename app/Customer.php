<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'name',
    ];

    public function maintenances()
    {
        return $this->hasMany('App\Maintenance');
    }

    public function vehicles()
    {
        return $this->hasMany('App\Vehicle');
    }
}
