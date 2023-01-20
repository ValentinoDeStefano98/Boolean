<?php

include_once __DIR__ . '/../shop.php';

class Food extends Products{
    public $size;
    public $typology;
    public $taste;
    public $animal;

    public function __construct($_name, $_category, $_price, $_stock, $_disponibility, $_size, $_typology, $_taste, $_animal){
        parent:: __construct($_name, $_category, $_price, $_stock, $_disponibility);
        $this -> setSize($_size);
        $this -> setTypology($_typology);
        $this -> setTaste($_taste);
        $this -> setAnimal($_animal);

    }

    public function setSize($_size){
        $this -> size = $_size;
        return $this;
    }

    public function setTypology($_typology){
        $this -> typology = $_typology;
        return $this;
    }

    public function setTaste($_taste){
        $this -> taste = $_taste;
        return $this;
    }

    public function setAnimal($_animal){
        $this -> animal = $_animal;
        return $this;
    }
}

?>