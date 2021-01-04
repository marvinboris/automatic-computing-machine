<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = [
        'ref', 'year', 'nominal_capacity', 'serial_number', 'chassis_number', 'vehicle_type_id', 'builder_id', 'customer_id', 'gauging_id',
    ];

    public function vehicle_type()
    {
        return $this->belongsTo('App\VehicleType');
    }

    public function builder()
    {
        return $this->belongsTo('App\Builder');
    }

    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }
}
