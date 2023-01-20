var app = new Vue({
    el: '#root',
    data: {
        randomMail: null,
        arrayMail: [],
    },
    created() {
        //Aggiungo 10 mail all'interno dell'array con un arrow function ed associando le mail generate ad una variabile creata nei data
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.randomMail = res.data.response;
                    arrayMail = this.arrayMail.push(this.randomMail);
                });
        }
    },
    method: {
    }
})