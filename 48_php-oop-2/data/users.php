<?php

class User{
    public $name;
    public $email;
    public $registered;
    public $creditCardNumber;
    public $deadlineDate;

    public function __construct($_name, $_email, $_registered, $_creditCardNumber, $_deadlineDate){
        $this -> setName($_name);
        $this -> setEmail($_email);
        $this -> setRegistered($_registered);
        $this -> setCreditCardNumber($_creditCardNumber);
        $this -> setDeadlineDate($_deadlineDate);
    }

    public function setName($_name){
        $this -> name = $_name;
        return $this;
    }

    public function setEmail($_email){
        $this -> email = $_email;
        return $this;
    }

    public function setRegistered($_registered){
        $this -> registered = $_registered;
        return $this;
    }

    public function setCreditCardNumber($_creditCardNumber){
        $this -> creditCardNumber = $_creditCardNumber;
        return $this;
    }

    public function setDeadlineDate($_deadlineDate){
        $this -> deadlineDate = $_deadlineDate;
        return $this;
    }

    public function deadlineCard(){
        if(date("Y/m/d") < $this -> deadlineDate){
            return 'Carta di credito valida';
        } else {
            throw new Exception('Attenzione, controlla la validità della tua carta di credito! Per procedere bisogna utilizzare una carta di credito valida.');
        }
    }

    public function verifyRegister(){
        if ($this -> registered == true){
            return 'Utente registrato!';
        } else {
            throw new Exception('Utente non registrato, registrati per ottenere uno sconto del 20%!');
        }
    }
}

?>