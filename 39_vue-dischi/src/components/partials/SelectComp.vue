<template>
    <div>
        <select class="form-select" aria-label="Default select example" v-model="selectedGenre" @change="$emit('funzioneSelect', selectedGenre)">
            <option value="" disabled selected>Seleziona il genere</option>
            <option value="null">-</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            <option value="metal">Metal</option>
        </select>
    </div>   
</template>

<script>

export default{
    name: 'SelectComp',
    data(){
        return{
            selectedGenre: ''
        }
    }
}

</script>

<style scoped lang="scss">

</style>