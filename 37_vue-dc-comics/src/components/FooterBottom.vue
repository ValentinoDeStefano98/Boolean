<template>
    <div class="bigContainer">
        <div class="flexContainer">
            <div class="buttonContainer">
                <a class="signUpButton" href="#">Sign-up Now!</a>
            </div>

            <div class="socialContainer">
                <span class="followButton">Follow us</span>
                <img src="../assets/img/footer-facebook.png" alt="">
                <img class="padding" src="../assets/img/footer-twitter.png" alt="">
                <img src="../assets/img/footer-youtube.png" alt="">
                <img class="padding" src="../assets/img/footer-pinterest.png" alt="">
                <img src="../assets/img/footer-periscope.png" alt="">   
            </div>
        </div>       
    </div>
</template>

<script>

export default {
    name: 'FooterBottom',
}
</script>

<style scoped lang="scss">
.bigContainer{
    background-color: #303030;
    padding: 50px 0;
}

.flexContainer{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;  
}

.socialContainer{
    width: 40%;
    display: flex;
    justify-content: end;
    align-items: center;
}

.padding{
    padding: 0 15px;
}

.followButton{
    color: #2658CB;
    padding: 0 15px;
    text-transform: uppercase;
    font-weight: bold;
}

.signUpButton{
    background-color: transparent;
    padding: 10px;
    border: 1px solid #2658CB;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
}
</style>