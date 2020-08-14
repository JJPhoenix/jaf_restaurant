<template>
    <div class="card_home" v-bind:class="type_card">
        <h5>{{title_card}}</h5>
        <p>{{des_card}}</p>
    </div>
</template>

<script>
    export default {
        name: "service_cards",
        props:{
            title_card: String,
            des_card: String,
            type_card: String
        }
    }
</script>

<style scoped lang="scss">
    .card_home{
        width: 200px;
        height: 230px;
        display: inline-block;
        border-radius: 10px;
        padding: 15px 25px;
        box-sizing: border-box;
        cursor: pointer;
        margin: 10px 15px;
        background-image: url("~Img/card1.jpg");
        background-position: center;
        background-size: cover;
        transition: transform 0.5s;

        h5{
            color: white;
            font-weight: bold;
        }
    }
    .card_home:hover{
        transform: translateY(-10px);
    }
    .card_clean{
        background-image: url("~Img/card1.jpg");
    }
    .card_delivery{
        background-image: url("~Img/card2.png");
    }
    .card_keep{
        background-image: url("~Img/card3.jpg");
    }
</style>
