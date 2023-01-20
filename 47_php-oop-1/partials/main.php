<?php require __DIR__ . '/../data/data.php' ?>
<main>
    <div class="d-flex">
        <ul class="list text-center border p-3 bg-light">
            <li>
                <h3><?php echo $spiderMan -> getName() ?></h3>
            </li>
            <li>
                <h5><?php echo $spiderMan -> getGenre() ?></h5>
            </li>
            <li>
                <h6><?php echo $spiderMan -> getYear() ?></h6>
            </li>
            <li>
                <h6><?php echo $spiderMan -> getRate() ?></h6>
            </li>
        </ul>
        <ul class="list text-center border p-3 bg-light">
            <li>
                <h3><?php echo $interstellar -> getName() ?></h3>
            </li>
            <li>
                <h5><?php echo $interstellar -> getGenre() ?></h5>
            </li>
            <li>
                <h6><?php echo $interstellar -> getYear() ?></h6>
            </li>
            <li>
                <h6><?php echo $interstellar -> getRate() ?></h6>
            </li>
        </ul>
        <ul class="list text-center border p-3 bg-light">
            <li>
                <h3><?php echo $ironman -> getName() ?></h3>
            </li>
            <li>
                <h5><?php echo $ironman -> getGenre() ?></h5>
            </li>
            <li>
                <h6><?php echo $ironman -> getYear() ?></h6>
            </li>
            <li>
                <h6><?php echo $ironman -> getRate() ?></h6>
            </li>
        </ul>
        <ul class="list text-center border p-3 bg-light">
            <li>
                <h3><?php echo $avengers -> getName() ?></h3>
            </li>
            <li>
                <h5><?php echo $avengers -> getGenre() ?></h5>
            </li>
            <li>
                <h6><?php echo $avengers -> getYear() ?></h6>
            </li>
            <li>
                <h6><?php echo $avengers -> getRate() ?></h6>
            </li>
        </ul>
        <ul class="list text-center border p-3 bg-light">
            <li>
                <h3><?php echo $thor -> getName() ?></h3>
            </li>
            <li>
                <h5><?php echo $thor -> getGenre() ?></h5>
            </li>
            <li>
                <h6><?php echo $thor -> getYear() ?></h6>
            </li>
            <li>
                <h6><?php echo $thor -> getRate() ?></h6>
            </li>
        </ul>
    </div>
</main>
