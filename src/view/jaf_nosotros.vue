<template>
    <div>
        <nosotros-card
                title_card="Sobre la Empresa"
                tittle_sub="Empresa">
            <p class="text-justify">En esta sección procedemos a describir la empresa la cual desarrollaremos el sistema web.
                JAF Restaurant
                JAF Restaurant es un restaurante peruano con 2 años de trayectoria en el mercado, fundada por los cocineros peruanos Javier Marcos, Fabian Vivanco y Abelardo Timana; JAF Restaurant a pesar de ser una empresa joven ha podido cautivar a sus clientes con su variedad de productos que van desde aperitivos hasta comidas gourmet y buffets, esto debido a la calidad que los viene caracterizando tanto en el producto que ofrecen y su atención brindada.
                JAF Restaurant destaca por tener una carta variada donde el cliente puede encontrar comidas variadas por temporadas a un precio competitivo, sin esperar mucho y con la calidad asegurada.</p>
        </nosotros-card>

        <nosotros-card
                title_card="Vision de la Empresa"
                tittle_sub="Vision">
            <p class="text-justify">JAF Restaurant tiene como misión satisfacer las necesidades gastronómicas de nuestros clientes, ofreciendo alimentos y
                servicios con la más alta calidad, donde se sobrepasen las expectativas de nuestros clientes y ser un espacio de trabajo
                que permita la realización personal y el desarrollo de sus colaboradores en el grupo tomando como estrategia principal el
                mejoramiento continúo de los estrictos estándares de higiene y buen servicio en un ambiente seguro, agradable y
                familiar a un precio justo.</p>
        </nosotros-card>

        <nosotros-card
                title_card="Mision de la Empresa"
                tittle_sub="Mision">
            <p class="text-justify">Ser un restaurante reconocido por brindar a nuestros clientes sensaciones agradables y momentos felices. Posicionarnos
                en el corazón de las familias peruanas y de todos los que nos visitan. Contribuir y aportar a nuestro país para que brinde un
                mejor futuro a nuestras próximas generaciones.</p>
        </nosotros-card>
    </div>
</template>

<script>
    import function_card from "../component/my_cards/function_card.vue";

    export default {
        name: "jaf_nosotros",
        components:{
            "nosotros-card":function_card,
        },
    }
</script>

<style scoped lang="scss">
    .banner-title{
        h1{
            font-size: 2em;
            color: white;
            margin-top: 1em;
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
