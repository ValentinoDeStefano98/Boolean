<template>
    <div>
        <PostsList/>
    </div>
</template>



<script>
    import PostsList from '../posts/PostsList.vue'
    export default{
        name: 'HomePage',
        component: {
            PostsList
        }
    }
</script>