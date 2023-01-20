@extends('layout.layout')

@section('title', 'movie')

@section('content')

    <div class="col card">
        <div class="card-body">
            <h3 class="card-title">{{ $movie->title }}</h3>
            <p class="card-text"><span class="text-danger">Language:</span>  {{ $movie->nationality }}</p>
            <p class="card-text"><span class="text-danger">Release:</span> {{ $movie->date }}</p>
            <p class="card-text"><span class="text-danger">Score:</span> {{ $movie->vote }}</p>
        </div>
    </div>
@endsection