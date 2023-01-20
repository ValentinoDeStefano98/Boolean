<template>
    <div>
        <h3>DC</h3>
        <ul>
            <li v-for="(element, index) in menuDc" :key='index'>
                <a :href="`${element.url}`"> {{ element.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DcComponent',
    data() {
        return {
            menuDc: [
                {
                    name: 'Terms Of Use',
                    url: '/terms-of-us'
                },
                {
                    name: 'Privacy policy (New)',
                    url: '/privacy-policy'
                },
                {
                    name: 'Ad Choices',
                    url: '/ad-choices'
                },
                {
                    name: 'Advertising',
                    url: '/advertising'
                },
                {
                    name: 'Jobs',
                    url: '/jobs'
                },
                {
                    name: 'Subscriptions',
                    url: '/subscriptions'
                },
                {
                    name: 'Talent Workshops',
                    url: '/talent-workshops'
                },
                {
                    name: 'CPSC Certificates',
                    url: '/cpsc-cerificates'
                },
                {
                    name: 'Ratings',
                    url: '/ratings'
                },
                {
                    name: 'Shop Help',
                    url: '/shop-help'
                },
                {
                    name: 'Contact us',
                    url: '/contact-us'
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
    color: white;
    color: lightgray;
}
</style>