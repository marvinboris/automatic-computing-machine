<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Builder extends Model
{
    protected $fillable = [
        'name',
    ];

    public function vehicles()
    {
        return $this->hasMany('App\Vehicle');
    }
}
