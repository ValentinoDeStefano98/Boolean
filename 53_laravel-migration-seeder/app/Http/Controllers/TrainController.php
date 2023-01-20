<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Train;

class TrainController extends Controller
{
    //Rotta localhost/trains
    public function index(){

        $trains = Train::where('departure_date', '2022-05-26') -> get();

        return view('pages.trains.index', compact('trains'));
    }
}
