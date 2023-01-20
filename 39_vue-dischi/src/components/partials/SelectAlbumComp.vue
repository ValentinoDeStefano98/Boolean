<template>
    <div>
        <select class="form-select" aria-label="Default select example" v-model="selectedAlbum" @change="$emit('funzioneSelectAlbum', selectedAlbum)">
            <option value="" disabled selected>Seleziona l'artista</option>
            <option value="null" >-</option>
            <option value="Bon Jovi">Bon Jovi</option>
            <option value="Queen">Queen</option>
            <option value="Sting">Sting</option>
            <option value="Steve Gadd Band">Steve Gadd Band</option>
            <option value="Iron Maiden">Iron Maiden</option>
            <option value="Eric Clapton">Eric Clapton</option>
            <option value="Deep Purple">Deep Purple</option>
            <option value="Metallica">Metallica</option>
            <option value="Dave Weckl">Dave Weckl</option>
            <option value="Michael Jacjson">Michael Jackson</option>
        </select>
    </div>   
</template>

<script>

export default{
    name: 'SelectAlbumComp',
    data(){
        return{
            selectedAlbum: ''
        }
    }
}

</script>

<style scoped lang="scss">

</style>