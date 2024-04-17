<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\ManageUsersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
require __DIR__ . '/auth.php';

Route::get('/', function () {
    return view('auth.login');
});

Route::get('/', [HomeController::class, 'index'])->name('dashboard');
Route::get('dashboard', [HomeController::class, 'index'])
    ->middleware(['auth', 'approvedUser'])
    ->name('home');

Route::group(['prefix' => 'seller', 'as' => 'seller.', 'middleware' => ['auth', 'sellerCheck', 'approvedUser']], function () {

});

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'adminCheck', 'approvedUser'], 'as' => 'admin.'], function () {

    Route::get('/users', [ManageUsersController::class, 'index'])->name('users.index');
});