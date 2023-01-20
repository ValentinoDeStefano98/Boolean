<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Boolean-Trainline</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link {{ Request::route()->getName() == 'home' ? 'text-primary' : '' }}" href="{{ route('home') }}">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link {{ Request::route()->getName() == 'trains' ? 'text-primary' : '' }}" href="{{ route('trains') }}">Trains</a>
      </li>
      <li class="nav-item">
        <a class="nav-link {{ Request::route()->getName() == 'aboutUs' ? 'text-primary' : '' }}" href="{{ route('aboutUs') }}">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link {{ Request::route()->getName() == 'contacts' ? 'text-primary' : '' }}" href="{{ route('contacts') }}">Contacts</a>
      </li>
    </ul>
  </div>
</nav>