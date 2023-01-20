<template>
    <div>
        <h3>DC Comics</h3>
        <ul>
            <li v-for="(element, index) in menuDcComics" :key='index'>
                <a :href="`${element.url}`"> {{ element.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DcComicsComponent',
    data() {
        return {
            menuDcComics: [
                {
                    name: 'Characters',
                    url: '/characters'
                },
                {
                    name: 'Comics',
                    url: '/comics'
                },
                {
                    name: 'Movies',
                    url: '/movies'
                },
                {
                    name: 'TV',
                    url: '/tv'
                },
                {
                    name: 'Games',
                    url: '/games'
                },
                {
                    name: 'Videos',
                    url: '/videos'
                },
                {
                    name: 'News',
                    url: '/news'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">

h3{
    color: white;
    padding: 20px 15px;
    text-align: start;
    text-transform: uppercase;
}

li{
    list-style-type: none;
    margin: 0 15px;
    text-align: start;
    
}

a{
    text-decoration: none;
    color: lightgray;
}
</style>
