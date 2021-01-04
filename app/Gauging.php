<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gauging extends Model
{
    protected $fillable = [
        'ref', 'date', 'nominal_capacity', 'gap_distance', 'average_centimetric_volume', 'total_height', 'total_capacity', 'measures', 'gauging_id', 'vehicle_id',
    ];

    public function vehicle()
    {
        return $this->belongsTo('App\Vehicle');
    }

    public function getMeasuresAttribute($value)
    {
        $measures = [];
        foreach (json_decode($value) as $measure) {
            $measures[] = [
                'h' => $measure->h,
                'v' => $measure->v,
            ];
        }

        return $measures;
    }
}
