<template>
    <div>
        <div class="banner-title">
            <b-container>
                <b-row>
                    <b-col cols="12" md="5">
                        <small>Bienvenido a nuestro restaurant</small>
                        <h1>JAF a la carta , es la primera WEB para restaurantes del mercado.</h1>
                        <b-button class="btn-init"><router-link to="/reserva" class="router-link">Pide tu orden!</router-link></b-button>

                    </b-col>
                    <b-col cols="12" md="6" offset-md="1">
                        <card title_card="Nuevo sistema de delivery"
                              type_card="card_delivery"/>
                        <card title_card="Nuevo sistema de delivery"
                              type_card="card_keep"/>
                        <card title_card="Nuevo sistema de delivery"
                              type_card="card_keep"/>
                        <card title_card="Nuevo sistema de delivery"
                              type_card="card_delivery"/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import service_cards from "../component/my_cards/service_cards.vue";
    export default {
        name: "home",
        components:{
            "card": service_cards
        }
    }
</script>

<style scoped lang="scss">
    .banner-title{
       h1{
           font-size: 3em;
           color: white;
           margin-top: .5em;
           font-weight: bold;
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
            padding-right: 2em;
            padding-left: 2em;
            .router-link{
                text-decoration: none;
                color: white;
            }
        }
        .btn-init:hover{
            background: darkred;
        }
    }
</style>
