<template>
    <div>
        <div class="banner-title">
            <b-container>
                <b-row>
                    <b-col cols="12" md="4">
                        <small>Bienvenido a nuestro restaurant</small>
                        <h1>JAF a la carta , es la primera WEB para restaurantes del mercado.</h1>
                        <b-button class="btn-init">Pide tu orden!</b-button>
                    </b-col>
                    <b-col cols="12" md="8">

                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
    .banner-title{
       h1{
           font-size: 2em;
           color: white;
           margin-top: .5em;
       }
        small{
            color: white;
            margin-bottom: 2em;
        }
        .btn-init{
            background: transparent;
            border: 1px solid #fff;
            border-radius: 20px;
            outline: none;
            cursor: pointer;
            transition: .5s;
            margin-top: 2em;
        }
        .btn-init:hover{
            background: darkred;
        }
    }
</style>
