<template>
    <div class="service">
        <div class="service-logo">
            <img src="" alt="logo">
        </div>
        <p class="tittle">{{title}}</p>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </p>
    </div>
</template>

<script>
    export default {
        name: "service_cards",
        data: function (){
            return{
                title: "Juan Javier"
            }
        }
    }
</script>

<style scoped lang="scss">
    .service{
        background: #fff;
        padding : 30px;
        border-radius: 10px;
        position: absolute;
        bottom: 0;
    }
    .service-logo{
        width: 130px;
        height: 130px;
        border-radius: ;
    }
</style>
