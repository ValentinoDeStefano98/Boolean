//Vue.js
var app = new Vue(
    {
        el: '#root',
        data: {
            products: [
                {
                    id: 1,
                    name: 'Nike',
                    price: 120,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 2,
                    name: 'Adidas',
                    price: 110,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 3,
                    name: 'Vans',
                    price: 90,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 4,
                    name: 'Jordan',
                    price: 160,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 5,
                    name: 'Puma',
                    price: 60,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 6,
                    name: 'Superga',
                    price: 70,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
            ],
            carrello: [],
        },
        created(){

        },
        methods: {
            //Funzione per aggiungere l'elemento al carrello
            addToCart: function(element){
                this.carrello.push(element);
            },
            //Funzione per rimuovere l'elemento dal carrello
            removeToCart: function(id){
                this.carrello = this.carrello.filter(
                    (element) => {
                        if(element.id != id){
                        return true;
                    }
                        return false;
                    }
                );
            },
            //Funzione per calcolare il totale del carrello
            sommaPrezzo: function(){
                let total = 0;
                this.carrello.forEach(
                    (element) => {
                        total += element.price;
                    }
                );
                return total;
            }
        }
    }
)