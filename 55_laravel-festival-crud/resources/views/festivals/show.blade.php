@extends('layouts.layout')

@section('content')

    <div class="container text-center">
        <img class="py-4 img-fluid" src="{{$festival->cover}}" alt="copertina">
        <h2 class="text-primary text-center py-2">{{$festival->name}}</h2>
        <h5 class="text-center py-2">{{$festival->song}}</h5>
        <h6 class="text-center py-2">{{$festival->genre}}</h6>

    </div>
@endsection