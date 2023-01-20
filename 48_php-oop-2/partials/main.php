<?php require  __DIR__ . '/../data/classiFigli/food.php'; ?>
<?php require  __DIR__ . '/../data/classiFigli/home.php'; ?>
<?php require  __DIR__ . '/../data/classiFigli/toys.php'; ?>
<?php require_once  __DIR__ . '/../data/users.php'; ?>

<!-- Elementi giochi -->
<?php $alberoGatti = new Toy('Albero per gatti', 'Giochi', 70, 14, 'Disponibile', 'Albero', 'qualunque età', 'Gatto', 'Verde', ' '); ?>
<?php $pupazzoCani = new Toy('Pupazzo per cani', 'Giochi', 20, 34, 'Disponibile', 'Pupazzo', 'qualunque età', 'Cane', 'Rosso', ' '); ?>

<!-- Elementi food -->
<?php $croccantiniGatti = new Food('Monge', 'Cibo', 30, 10, 'Disponibile', 10, 'Croccantini', 'Pollo', 'Gatto');?>
<?php $croccantiniCani = new Food('Royal Canin', 'Cibo', 60, 20, 'Disponibile', 30, 'Croccantini', 'Vitello', 'Cane');?>

<!-- Elementi home -->
<?php $cucciaGatto = new Home('Cuccia per gatti', 'Cuccia', 90, 4, 'Disponibile', 'Qualunque età', 'Gatto', 'Nero');?>
<?php $cucciaCane = new Home('Cuccia per cani', 'Cuccia', 100, 10, 'Disponibile', 'Qualunque età', 'Cane', 'Verde');?>

<!-- Elementi users -->
<?php $currentUsers = new User('Valentino De Stefano', ' ', false, 37633346878387, '2019/06/23');?>

<main class="py-4">

    <div class="text-center">
        <h3>Carrello</h3>  
    </div>

    <div class="d-flex big-container pb-5">
        <div class="d-flex card">           
            <div class="d-flex flex-column p-5 text-center border">
                <h5> <?php echo $croccantiniGatti -> name ?> </h5>
                <h6> <?php echo $croccantiniGatti -> category ?> </h6>
                <h6> <?php echo $croccantiniGatti -> typology ?> </h6>
                <span> <?php echo $croccantiniGatti -> animal ?> - <?php echo $croccantiniGatti -> taste ?> </span>               
                <span class="border bg-warning"> <?php echo $croccantiniGatti -> disponibility ?> </span>               
                <span class="border bg-success"> <?php echo $croccantiniGatti -> price ?>$ </span>
                <span class="mini-font"> Per gatti da <?php echo $croccantiniGatti -> size ?>kg </span>              
            </div>
            <div class="d-flex flex-column p-5 text-center border">
                <h5> <?php echo $croccantiniCani -> name ?> </h5>
                <h6> <?php echo $croccantiniCani -> category ?> </h6>
                <h6> <?php echo $croccantiniCani -> typology ?> </h6>
                <span> <?php echo $croccantiniCani -> animal ?> - <?php echo $croccantiniCani -> taste ?> </span>               
                <span class="border bg-warning"> <?php echo $croccantiniCani -> disponibility ?> </span>               
                <span class="border bg-success"> <?php echo $croccantiniCani -> price ?>$ </span>
                <span class="mini-font"> Per gatti da <?php echo $croccantiniCani -> size ?>kg </span> 
            </div>
        </div>

        <div class="d-flex card">        
            <div class="d-flex flex-column p-5 text-center border">
                <h5> <?php echo $alberoGatti -> name ?> </h5>
                <h6> <?php echo $alberoGatti -> category ?> </h6>
                <h6> <?php echo $alberoGatti -> typology ?> </h6>
                <span> <?php echo $alberoGatti -> animal ?> - <?php echo $alberoGatti -> color ?> </span>               
                <span class="border bg-warning"> <?php echo $alberoGatti -> disponibility ?> </span>               
                <span class="border bg-success"> <?php echo $alberoGatti -> price ?>$ </span>
                <span class="mini-font"> Per gatti di <?php echo $alberoGatti -> size ?> </span> 
            </div>
            <div class="d-flex flex-column p-5 text-center border">
                <h5> <?php echo $pupazzoCani -> name ?> </h5>
                <h6> <?php echo $pupazzoCani -> category ?> </h6>
                <h6> <?php echo $pupazzoCani -> typology ?> </h6>
                <span> <?php echo $pupazzoCani -> animal ?> - <?php echo $pupazzoCani -> color ?> </span>               
                <span class="border bg-warning"> <?php echo $pupazzoCani -> disponibility ?> </span>               
                <span class="border bg-success"> <?php echo $pupazzoCani -> price ?>$ </span>
                <span class="mini-font"> Per gatti di <?php echo $pupazzoCani -> size ?> </span>
            </div>
        </div>

        <div class="d-flex card">           
            <div class="d-flex flex-column p-5 text-center border">
                <h5> <?php echo $cucciaGatto -> name ?> </h5>
                <h6> <?php echo $cucciaGatto -> category ?> </h6>
                <span> <?php echo $cucciaGatto -> animal ?> - <?php echo $cucciaGatto -> color ?> </span>               
                <span class="border bg-warning"> <?php echo $cucciaGatto -> disponibility ?> </span>               
                <span class="border bg-success"> <?php echo $cucciaGatto -> price ?>$ </span>
                <span class="mini-font"> Per gatti di <?php echo $cucciaGatto -> size ?> </span>
            </div>
            <div class="d-flex flex-column p-5 text-center border">
                <h5> <?php echo $cucciaCane -> name ?> </h5>
                <h6> <?php echo $cucciaCane -> category ?> </h6>
                <span> <?php echo $cucciaCane -> animal ?> - <?php echo $cucciaCane -> color ?> </span>               
                <span class="border bg-warning"> <?php echo $cucciaCane -> disponibility ?> </span>               
                <span class="border bg-success"> <?php echo $cucciaCane -> price ?>$ </span>
                <span class="mini-font"> Per cani di <?php echo $cucciaCane -> size ?> </span>
            </div>
        </div>
     </div>

        <div>
            <div class="text-center">
                <h2>Pagamento</h2>
            </div>          
            <div class="d-flex flex-column p-5 text-center">
                <div class="pb-4">
                    <h4> <?php echo $currentUsers -> name ?> </h4>
                    <span> <?php echo $currentUsers -> email ?> </span>
                    <span> 
                        <?php
                            try{
                                echo $currentUsers -> verifyRegister();
                            } catch (Exception $e) {
                                echo $e -> getMessage();
                            }
                            
                        ?>
                    </span>
                </div>
                
                <div>
                    <h6>Dati di pagamento</h6>
                    <span> <?php echo $currentUsers -> creditCardNumber ?> - </span>
                    <span> <?php echo $currentUsers -> deadlineDate ?> </span>
                </div>
                
                <span class="py-4"> 
                    <?php
                        try{
                            echo $currentUsers -> deadlineCard();
                        } catch (Exception $e) {
                            echo $e -> getMessage();
                        }
                    ?> 
                </span>
            </div>
        </div>  
</main>