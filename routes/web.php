<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\ManageUsersController;
use App\Http\Controllers\seller\SellController;
use App\Http\Controllers\seller\InvoiceController;
use App\Http\Controllers\seller\ReportController;
use App\Http\Controllers\seller\StockController;

require __DIR__ . '/auth.php';

Route::get('/', function () {
    return view('auth.login');
});

Route::get('/home', [HomeController::class, 'index'])->name('dashboard');
Route::get('dashboard', [HomeController::class, 'index'])
    ->middleware(['auth', 'approvedUser'])
    ->name('home');

Route::group(['prefix' => 'seller', 'as' => 'seller.', 'middleware' => ['auth', 'sellerCheck', 'approvedUser']], function () {
    Route::get('/sell', [SellController::class, 'index'])->name('sell.index');
    Route::get('/invoice', [InvoiceController::class, 'index'])->name('invoice.index');
    Route::post('/sell', [SellController::class, 'store'])->name('sell.store');
    Route::delete('/seller/sales/{id}', [SellController::class, 'destroy'])->name('sales.destroy');
    Route::get('/seller/sales/{id}/edit', [SellController::class, 'edit'])->name('sales.edit');
    Route::put('/seller/sales/{id}', [SellController::class, 'update'])->name('sales.update');
    Route::get('/invoice/{id}', [InvoiceController::class, 'view'])->name('invoice.view');
    //Report
    Route::get('/report', [ReportController::class, 'index'])->name('report.index');

    //stock
    Route::get('/stock', [StockController::class, 'index'])->name('stock.index');

});

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'adminCheck', 'approvedUser'], 'as' => 'admin.'], function () {

    Route::get('/users', [ManageUsersController::class, 'index'])->name('users.index');
});
