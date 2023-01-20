<?php

trait Info{
    public $name;
    public $category;
    public $price;
}

trait Stock{
    public $stock;
    public $disponibility;
}

class Products{
    
    use Info;
    use Stock;

    public function __construct($_name, $_category, $_price, $_stock = 0, $_disponibility = true){
        $this -> setName($_name);
        $this -> setCategory($_category);
        $this -> setPrice($_price);
        $this -> setStock($_stock);
        $this -> setDisponibility($_disponibility);
    }

    //setter
    public function setName($_name){
        $this -> name = $_name;
        return $this;
    }

    public function setCategory($_category){
        $this -> category = $_category;
        return $this;
    }

    public function setPrice($_price){
        $this -> price = $_price;
        return $this;
    }

    public function setStock($_stock){
        $this -> stock = $_stock;
        return $this;
    }

    public function setDisponibility($_disponibility){
        $this -> disponibility = $_disponibility;
        return $this;
    }
}

?>