<template>
    <div>
        <PostList/>
    </div>
</template>



<script>
    import PostList from '../posts/PostsList.vue'
    export default{
        name: 'HomePage',
        components: {
            PostList,
        }
    }
</script>