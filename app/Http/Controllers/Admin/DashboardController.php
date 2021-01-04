<?php

namespace App\Http\Controllers\Admin;

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
            $maintenances[] = array_merge($maintenance->toArray());
        }

        $vehicles = [];
        foreach (Vehicle::latest()->limit(5)->get() as $vehicle) {
            $vehicles[] = array_merge($vehicle->toArray());
        }

        return response()->json([
            'blocksData' => $blocksData,
            'maintenances' => $maintenances,
            'vehicles' => $vehicles,
        ]);
    }
}
