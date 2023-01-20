<template>
    <div>
        <img :src="`${post.image}`" alt="">
        <h1>{{post.title}}</h1>
        <Alert v-if="isError" message="Il post non esiste" type="danger" />
        <p>{{post.content}}</p>
    </div>
</template>

<script>
import axios from 'axios';
import Alert from '../Alert.vue'

    export default{
        name: 'PostDetailPage',
        data(){
            return{
                post: [],
                isErrore: false
            }
        },
        components: {
            Alert
        },
        methods: {
            getPost() {
                axios.get(`http://127.0.0.1:8000/api/posts/${this.$route.params.slug}`)
                    .then((res) =>{
                        console.log(res.data);
                        this.post=res.data;
                }).catch((err) => {
                    console.log(err);
                    this.isError = true;
                });
            }
        },
        mounted(){
            this.getPost();
        }
    }
</script>