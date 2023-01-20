<template>
    <div>
       <ul>
           <li>
               <a class="active" href="#">Characters</a>
           </li>
           <li>
               <a href="#"> Comics </a>
           </li>
           <li>
               <a href="#"> Movies </a>
           </li>
           <li>
               <a href="#"> TV </a>
           </li>
           <li>
               <a href="#"> Games </a>
           </li>
           <li>
               <a href="#"> Collectibles </a>
           </li>
           <li>
               <a href="#"> Videos </a>
           </li>
           <li>
               <a href="#"> Fans </a>
           </li>
           <li>
               <a href="#"> News </a>
           </li>
           <li>
               <a href="#"> Shop </a>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderNavComponent',
    data(){
    },
    methods:{
    } 
}
</script>

<style scoped lang="scss">
ul{
    display: flex;
}

li{
    list-style-type: none;
    margin: 0 15px;
    text-transform: uppercase;
    font-weight: bold;
}

a{
    text-decoration: none;
    color: black;
}

.active{
    color: #0282F9;
    border-block-end: 3px solid #0282F9;
}
</style>