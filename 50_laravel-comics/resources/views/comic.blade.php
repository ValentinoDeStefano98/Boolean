@extends('layout.layout')

@section('title', 'singolo prodotto')

@section('content')

    <img src="{{$singoloFumetto['thumb']}}" alt="comic image" class="single-product-img">
    <div class="post-img">
    </div>
    <div class="info-container">
        <div class="left-container">
            <h2 class="comics-title">{{ $singoloFumetto['title'] }}</h2>
            <div class="medium-container">
                <div class="price-container">
                    <span class="text-white">U.S. Price: {{ $singoloFumetto['price'] }}</span>
                    <span class="text-white text-uppercase">Available</span>
                </div>
                <div class="availability-container">
                    <span class="text-white">Check Availability</span>
                </div>
            </div>
            <p>{{ $singoloFumetto['description'] }}</p>
        </div>
        <div>
            <img src="{{ asset('images/adv.jpg') }}" alt="Logo" class="adv-images">
        </div>
    </div>

    <div class="talent-spech-container">
        <div class="spech-container">
            <div class="talent-container">
                <h3>Talent</h3>
                <hr>
                <div class="artist-container">
                    <div class="art-by-container">
                        <div>
                            Art By:
                        </div>
                        <div class="selector">
                            @foreach($singoloFumetto['artists'] as $artist)
                                <span>{{ $artist }}</span>
                            @endforeach
                        </div>
                    </div>
                    
                </div>
                <hr>
                <div class="artist-container">
                    <div class="art-by-container">
                        <div>
                            Written By:
                        </div>
                        <div class="selector">
                            @foreach($singoloFumetto['writers'] as $writer)
                            <span>{{ $writer }}</span>
                            @endforeach
                        </div>
                    </div>
                </div>
                <hr>
            </div>
            <div class="specs-container">
                <h3>Specs</h3>
                <hr>
                <div class="series-container">
                    <div class="series">
                        <div>
                            Series:
                        </div>
                        <div class="val">
                            <span>{{ $singoloFumetto['series'] }}</span>
                        </div>
                    </div>   
                </div>
                <hr>
                <div class="price-info-container">
                    <div class="price-info">
                        <div>
                            U.S Price:
                        </div>
                        <div class="val">
                            <span>{{ $singoloFumetto['price'] }}</span>
                        </div>
                    </div>   
                </div>
                <hr>
                <div class="sale-container">
                    <div class="sale">
                        <div>
                            On Sale Date:
                        </div>
                        <div class="val">
                            <span>{{ $singoloFumetto['sale_date'] }}</span>
                        </div>
                    </div>   
                </div>
                <hr>
            </div>
        </div>
        <div class="pre-footer-icons-big-container">
            <div class="pre-footer-icons-container">
                <div class="border box-prefooter">
                    <h4>Digital comics</h4>
                    <img src="{{ asset('images/buy-comics-digital-comics.png') }}" alt="Logo" class="pre-footer-img">
                </div>
                <div class="border box-prefooter">
                    <h4>Shop DC</h4>
                    <img src="{{ asset('images/buy-comics-digital-comics.png') }}" alt="Logo" class="pre-footer-img">
                </div>
                <div class="border box-prefooter">
                    <h4>Comic Shop Locator</h4>
                    <img src="{{ asset('images/buy-comics-digital-comics.png') }}" alt="Logo" class="pre-footer-img">
                </div>
                <div class="border box-prefooter">
                    <h4>Subscriptions</h4>
                    <img src="{{ asset('images/buy-comics-digital-comics.png') }}" alt="Logo" class="pre-footer-img">
                </div>
            </div>
        </div>
    </div>
@endsection