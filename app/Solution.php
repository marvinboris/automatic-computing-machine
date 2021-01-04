<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    protected $fillable = [
        'quantity', 'problem_id', 'solution_id', 'solution_type',
    ];
    
    public function solution()
    {
        return $this->morphTo();
    }

    public function action()
    {
        return $this->belongsTo('App\Action');
    }

    public function problem()
    {
        return $this->belongsTo('App\Problem');
    }
}
