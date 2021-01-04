<?php

use App\Action;
use App\Problem;
use App\Solution;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('resend', 'AuthController@resend')->name('resend');
    Route::post('verify', 'AuthController@verify')->name('verify');

    Route::middleware('auth:admin')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        Route::apiResources([
            'organs' => 'OrganController',
            'units' => 'UnitController',
            'actions' => 'ActionController',
            'actions.sub-actions' => 'SubActionController',

            'builders' => 'BuilderController',
            'customers' => 'CustomerController',

            'maintenances' => 'MaintenanceController',
            'maintenances.problems' => 'ProblemController',
            'maintenances.problems.solutions' => 'SolutionController',

            'vehicles' => 'VehicleController',
            'vehicle-types' => 'VehicleTypeController',
        ]);
    });
});

Route::namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('forgot', 'AuthController@forgot')->name('forgot');
    Route::post('reset/{id}/{code}', 'AuthController@reset')->name('reset');

    Route::middleware('auth:api')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        Route::post('maintenances/{maintenance}/proforma', 'MaintenanceController@proforma')->name('maintenances.proforma');
        Route::post('gaugings/{gauging}/proforma', 'GaugingController@proforma')->name('gaugings.proforma');

        Route::apiResources([
            'organs' => 'OrganController',
            'units' => 'UnitController',
            'actions.sub-actions' => 'SubActionController',
            'actions' => 'ActionController',
            'sells' => 'SellController',

            'builders' => 'BuilderController',
            'customers' => 'CustomerController',

            'maintenances.problems.solutions' => 'SolutionController',
            'maintenances.problems' => 'ProblemController',
            'maintenances' => 'MaintenanceController',

            'gaugings' => 'GaugingController',

            'vehicles' => 'VehicleController',
            'vehicle-types' => 'VehicleTypeController',
        ]);
    });
});

Route::middleware('auth:admin,api')->group(function () {
    Route::name('logout')->get('logout', 'AuthController@logout');
    Route::name('user')->get('user', 'AuthController@user');

    Route::name('export.')->prefix('export')->group(function () {
        Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        Route::name('csv')->post('csv', 'ExportController@csv');
        Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });
});

Route::get('test', function () {
    dd(Solution::first()->solution->name);
});