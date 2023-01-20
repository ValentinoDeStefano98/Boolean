var app = new Vue(
    {
        el: '#root',
        data: {
            images: [
                'https://source.unsplash.com/random/?city',
                'https://source.unsplash.com/random/?dog',
                'https://source.unsplash.com/random/?car',
                'https://source.unsplash.com/random/?sea',
                'https://source.unsplash.com/random/?mountains',
            ],
            counter: 0,
        },
        created() {
            this.nextPhoto();
        },
        methods: {
            //Funzione per andare avanti con le foto al clic della freccetta destra
            changePhotoPlus: function(){
                this.counter += 1;
                if(this.counter > this.images.length - 1){
                    this.counter = 0;
                }
            },
            //Funzione per andare indietro con le foto al clic della freccetta sinistra
            changePhotoMinus: function(){
                this.counter -= 1;
                if(this.counter < 0){
                    this.counter = this.images.length - 1;
                }
            },
            //Funzione per settare il timer per il cambio foto automatico
            nextPhoto: function(){
                setInterval(() => {
                    this.changePhotoPlus();
                }, 3000);
            },
            //Funzione per andare alla foto successiva cliccando sul relativo pallino
            clickFunction: function(index){
                this.counter = index;
            },
        },
    }
)