//Carico l'istanza di Vue
var app = new Vue(
    {
        el: '#root',
        data:{
            taskAdded: '',
            tasks: [
                {               
                text: 'Fare la spesa',
                done: false
                },
                {               
                text: 'Portare a spasso il cane',
                done: false
                },
                {               
                text: 'Preparare una torta',
                done: false
                },
                {               
                text: 'Chiamare Anna',
                done: false
                },
                {               
                text: 'Comprare regalo',
                done: false
                },
            ]
            
        },
        methods: {
            //Funzione per rimuovere il task al click della x
            removeTask: function(taskIndex){
                this.tasks.splice(taskIndex, 1);
            },
            //Funzione per aggiungere un task alla lista
            addTask: function(){
                let newTask = {
                    text: this.taskAdded,
                    done: false,
                }
                //Aggiungo il task solamente se la stringa non è vuota
                if ( !this.taskAdded == ''){
                    this.tasks.push(newTask);
                    //Svuoto l'input dopo aver inserito il task
                    this.taskAdded = '';
                }
            },
            //Funzione per cambiare stato al task e barrarlo/sbarrarlo
            taskDone: function(element){
                if (element.done == true){
                    element.done = false;
                } else {
                    element.done = true;
                }
            },
        }
    }
);