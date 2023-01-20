<?php
$film = [];
//inizializzo la classe
class Movie{
    public $name;
    public $genre;
    public $year;
    public $rate;

    //creo il costruttore
    public function __construct($_name, $_genre, $_year, $_rate){
        $this -> name = $_name;
        $this -> genre = $_genre;
        $this -> year = $_year;
        $this -> rate = $_rate;
    }
    //Funzioni di stampa
    public function getName(){
        return $this -> name;
    }

    public function getGenre(){
        return $this -> genre;
    }

    public function getYear(){
        return $this -> year;
    }

    public function getRate(){
        return $this -> rate;
    }
}
//istanzio i film
$spiderMan = new Movie("SpiderMan", "Action", "2002", "4/5");
$interstellar = new Movie("Interstellar", "Science", "2014", "4/5");
$ironman = new Movie("Iron Man", "Action", "2008", "4/5");
$avengers = new Movie("The Avengers", "Action", "2012", "4/5");
$thor = new Movie("Thor", "Action", "2011", "3/5");

?>