<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacts</title>
</head>
<body>
    <h1>Contacts</h1>
    <a href="{{ route('hello') }}">Home</a>
    <a href="{{ route('about') }}">About</a>
    <a href="{{ route('contacts') }}">Contacts</a>
    <a href="{{ route('store') }}">Store</a>

    @foreach ( $contatti as $contatto)
        <li>{{ $contatto }}</li>
    @endforeach
</body>
</html>