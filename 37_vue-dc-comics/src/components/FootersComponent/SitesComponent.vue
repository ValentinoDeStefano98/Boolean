<template>
    <div>
        <h3>Sites</h3>
        <ul>
            <li v-for="(element, index) in menuSites" :key='index'>
                <a :href="`${element.url}`"> {{ element.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SitesComponent',
    data() {
        return {
            menuSites: [
                {
                    name: 'DC',
                    url: '/dc'
                },
                {
                    name: 'MAD Magazine',
                    url: '/mad-magazine'
                },
                {
                    name: 'DC Kids',
                    url: '/dc-kids'
                },
                {
                    name: 'DC Universe',
                    url: '/dc-universe'
                },
                {
                    name: 'DC Power Visa',
                    url: '/dc-power-visa'
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