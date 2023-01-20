<?php

include_once __DIR__ . '/../shop.php';
include_once __DIR__ . '/../users.php';

class Toy extends Products{
    public $typology;
    public $size;
    public $animal;
    public $color;

    public function __construct($_name, $_category, $_price, $_stock, $_disponibility, $_typology, $_size, $_animal, $_color){
        parent:: __construct($_name, $_category, $_price, $_stock, $_disponibility);
        $this -> setTypology($_typology);
        $this -> setSize($_size);
        $this -> setAnimal($_animal);
        $this -> setColor($_color);
    }

    public function setTypology($_typology){
        $this -> typology = $_typology;
        return $this;
    }

    public function setSize($_size){
        $this -> size = $_size;
        return $this;
    }

    public function setAnimal($_animal){
        $this -> animal = $_animal;
        return $this;
    }

    public function setColor($_color){
        $this -> color = $_color;
        return $this;
    }
  
}

?>