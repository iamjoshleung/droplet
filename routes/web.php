<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/history', function () {
  return 'history';
})->name('history');

Route::get('/requests/get', function () {
  return 'File Requests';
})->name('requests.get');

Route::get('/requests/send', function () {
  return 'Send Files';
})->name('requests.send');

Route::get('/users/create', function () {
  return 'Create a user';
})->name('users.create');

Route::get('/users', function () {
  return 'All users';
})->name('users.all');
