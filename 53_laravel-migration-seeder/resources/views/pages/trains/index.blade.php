@extends('layout.layout')

@section('content')

<div class="row row-cols-3 g-3">
    @forelse ( $trains as $key => $train )
        <div>
            <div class="col card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ $train->company }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ $train->departure_station }}</h6>
                    <h6 class="card-text">{{ $train->arrival_station }}</h6>
                    
                </div>
            </div>
        </div>
    @empty
        <h2>Non ci sono ancora treni in viaggio</h2>
    @endforelse
</div>


@endsection