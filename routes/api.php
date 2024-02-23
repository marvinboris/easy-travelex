<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('auth')->name('auth.')->group(function () {
    Route::namespace('User')->prefix('user')->name('user')->group(function () {
        Route::post('login', 'AuthController@login')->name('login');
        Route::post('forgot', 'AuthController@forgot')->name('forgot');
        Route::post('reset/{id}/{code}', 'AuthController@reset')->name('reset');
    });
});

Route::namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::middleware('auth:api')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        Route::middleware('permission')->group(function () {
            Route::prefix('features')->name('features.')->group(function () {
                Route::get('{feature}', 'FeatureController@show')->name('show');
            });

            Route::prefix('languages')->name('languages.')->group(function () {
                Route::get('{language}', 'LanguageController@show')->name('show');
            });

            Route::prefix('roles')->name('roles.')->group(function () {
                Route::get('info', 'RoleController@info')->name('info');
                Route::get('{role}', 'RoleController@show')->name('show');
            });

            Route::prefix('users')->name('users.')->group(function () {
                Route::get('info', 'UserController@info')->name('info');
                Route::get('{user}', 'UserController@show')->name('show');
            });

            Route::prefix('visa-applications')->name('visa-applications.')->group(function () {
                Route::get('info', 'VisaApplicationController@info')->name('info');
                Route::get('{visaApplication}', 'VisaApplicationController@show')->name('show');
            });

            Route::prefix('tour-applications')->name('tour-applications.')->group(function () {
                Route::get('info', 'TourApplicationController@info')->name('info');
                Route::get('{tourApplication}', 'TourApplicationController@show')->name('show');
            });

            Route::apiResources([
                'users' => 'UserController',
                'roles' => 'RoleController',
                'features' => 'FeatureController',
                'languages' => 'LanguageController',
                'visa-applications' => 'VisaApplicationController',
                'tour-applications' => 'TourApplicationController',
            ]);
        });
    });
});

Route::middleware('auth:admin,api')->group(function () {
    Route::get('logout', 'UtilController@logout')->name('logout');
    Route::get('account', 'UtilController@account')->name('account');

    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('{notification}', 'UtilController@notification')->name('show');
        Route::get('', 'UtilController@notifications')->name('index');
    });

    Route::name('export.')->prefix('export')->group(function () {
        Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        Route::name('csv')->post('csv', 'ExportController@csv');
        Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });
});

Route::name('frontend.')->group(function () {
    Route::prefix('publications')->name('publications.')->group(function () {
        Route::get('', 'FrontendController@publications')->name('index');
    });

    Route::prefix('products')->name('products.')->group(function () {
        Route::get('', 'FrontendController@products')->name('index');
    });

    Route::prefix('services')->name('services.')->group(function () {
        Route::get('', 'FrontendController@services')->name('index');
    });

    Route::post('quote', 'FrontendController@quote')->name('quote');
    Route::post('contact', 'FrontendController@contact')->name('contact');
    Route::post('tour-applications', 'FrontendController@tourApplications')->name('tour-applications');
    Route::post('visa-applications', 'FrontendController@visaApplications')->name('visa-applications');
    Route::get('tours', 'FrontendController@tours')->name('tours');
    Route::get('visas', 'FrontendController@visas')->name('visas');
    Route::get('home', 'FrontendController@home')->name('home');
});
