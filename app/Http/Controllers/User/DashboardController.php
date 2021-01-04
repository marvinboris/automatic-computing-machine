<?php

namespace App\Http\Controllers\User;

use App\Action;
use App\Customer;
use App\Http\Controllers\Controller;
use App\Maintenance;
use App\Vehicle;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $totalVehicles = count(Vehicle::all());
        $totalMaintenances = count(Maintenance::all());
        $totalActions = count(Action::all());
        $totalCustomers = count(Customer::all());

        $blocksData = [
            'totalVehicles' => $totalVehicles,
            'totalMaintenances' => $totalMaintenances,
            'totalActions' => $totalActions,
            'totalCustomers' => $totalCustomers,
        ];

        $maintenances = [];
        foreach (Maintenance::latest()->limit(5)->get() as $maintenance) {
            $maintenances[] = array_merge($maintenance->toArray(), [
                'customer' => $maintenance->vehicle->customer->name,
                'vehicle' => $maintenance->vehicle->name,
            ]);
        }

        $vehicles = [];
        foreach (Vehicle::latest()->limit(5)->get() as $vehicle) {
            $vehicles[] = array_merge($vehicle->toArray(), [
                'vehicle_type' => $vehicle->vehicle_type->name,
                'builder' => $vehicle->builder->name,
                'customer' => $vehicle->customer->name,
            ]);
        }

        return response()->json([
            'blocksData' => $blocksData,
            'maintenances' => $maintenances,
            'vehicles' => $vehicles,
        ]);
    }
}
