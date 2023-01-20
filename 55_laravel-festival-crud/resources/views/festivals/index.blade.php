@extends('layouts.layout')

@section('title')
    Festival
@endsection

@section('content')
    <div class="text-center">
        <h2>Prossimo Festival</h2>
    </div>
    <div class="container d-flex">
        @forelse($festivals as $festival)
            <div class="card" style="width: 18rem;">
                <img src="{{$festival->cover}}" class="card-img-top" alt="...">
                <div class="card-body text-center d-flex flex-column justify-content-between">
                    <div>
                        <h4 class="">{{$festival->name}}</h4>
                        <h5>{{$festival->song}}</h5>
                        <h6>{{$festival->genre}}</h6>
                    </div>
                    <div>
                        <a href="{{route('festivals.show', $festival->id)}}" class="btn btn-primary">Dettagli</a>
                    </div>
                     
                </div>
            </div>
        @empty
            <div>
                Non ci sono eventi in programma
            </div>
        @endforelse
    </div>
    @endsection