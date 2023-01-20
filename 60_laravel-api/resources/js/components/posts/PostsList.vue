<template>
    <div>
        <!-- loader -->
        <Loader v-if="isLoading" />
        <div v-if="posts.length">
            <div class="card text-center my-4" v-for="post in posts" :key="post.id">
                <div class="card-header">
                    <h4>{{post.title}}</h4>                   
                </div>
                <div class="card-body d-flex">
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <img :src="`${post.image}`" alt="`${post.title}`" class="img-fluid">
                                <div class="mt-3">
                                    <span v-for="tag in post.tags" :key="tag.id" class="badge mx-1 text-white"
                                        :style="`background-color:${tag.color}`">{{tag.label}}</span>
                                </div>
                            </div>
                            <div class="col-8">
                                <p class="card-text article">
                                    {{post.content}}
                                </p>
                                <button class="btn btn-primary">Leggi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p v-else>Non ci sono articoli</p>
        <Pagination :pagination="pagination"/>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../Loader.vue';
import Pagination from '../Pagination.vue';

    export default{
        name: "PostsList",
        components: {
            Loader,
            Pagination
        },
        data(){
            return{
                posts: [],
                isLoading: true,
                pagination: {}
            }
        },
        methods: {
            getPosts(){
                axios.get("http://127.0.0.1:8000/api/posts")
                    .then((res)=>{
                        const {data, current_page, last_page} = res.data.posts;

                        this.posts = data;

                        this.pagination = {
                            lastPage: last_page,
                            currentPage: current_page
                        }
                    }).then(()=>{
                        console.log('terminato il caricamento dei posts')
                        this.isLoading = false;
                    })
            }
        },
        mounted(){
            this.getPosts();
        }
    }
</script>

<style scoped>
    img{
        max-width: 70%;
        max-height: 80%;
    }

    .article{
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>