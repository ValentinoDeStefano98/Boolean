<header class="d-flex justify-content-between align-items-center">
    <div class="logoContainer d-flex justify-content-between align-items-center">
        <img class="logo" src="./img/spotify-logo.png" alt="">  
    </div>
    <div class="me-2">
        <!-- SCELTA DEI VALORI TRAMITE INPUT TEXT -->
        <form class="d-flex align-items-center mb-2">
            <div class="me-2">
                <input type="text" placeholder="Cerca per genere" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="genreSearched">
            </div>
            <div>
                <button type="submit" class="btn btn-primary">X</button> 
            </div>      
        </form>
        <!-- SCELTA DEI VALORI TRAMITE SELECT -->
        <select class="form-select" aria-label="Disabled select example" v-model="genreSelected">
            <option selected>Seleziona il genere</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="Metal">Metal</option>
        </select>
    </div> 
</header>