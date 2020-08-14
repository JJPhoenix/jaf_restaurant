<template>
    <div>
        <div class="banner-title">
            <b-container>
                <b-row>
                    <b-col cols="12" md="4">
                        <small>Sobre la Empresa</small>
                        <h1>En esta sección procedemos a describir la empresa la cual desarrollaremos el sistema web.
                            JAF Restaurant
                            JAF Restaurant es un restaurante peruano con 2 años de trayectoria en el mercado, fundada por los cocineros peruanos Javier Marcos, Fabian Vivanco y Abelardo Timana; JAF Restaurant a pesar de ser una empresa joven ha podido cautivar a sus clientes con su variedad de productos que van desde aperitivos hasta comidas gourmet y buffets, esto debido a la calidad que los viene caracterizando tanto en el producto que ofrecen y su atención brindada.
                            JAF Restaurant destaca por tener una carta variada donde el cliente puede encontrar comidas variadas por temporadas a un precio competitivo, sin esperar mucho y con la calidad asegurada.</h1>
                        <small>Vision</small>
                        <h1>JAF Restaurant tiene como misión satisfacer las necesidades gastronómicas de nuestros clientes, ofreciendo alimentos y
                            servicios con la más alta calidad, donde se sobrepasen las expectativas de nuestros clientes y ser un espacio de trabajo
                            que permita la realización personal y el desarrollo de sus colaboradores en el grupo tomando como estrategia principal el
                            mejoramiento continúo de los estrictos estándares de higiene y buen servicio en un ambiente seguro, agradable y
                            familiar a un precio justo.</h1>
                        <small>Mision</small>
                        <h1>Ser un restaurante reconocido por brindar a nuestros clientes sensaciones agradables y momentos felices. Posicionarnos
                            en el corazón de las familias peruanas y de todos los que nos visitan. Contribuir y aportar a nuestro país para que brinde un
                            mejor futuro a nuestras próximas generaciones.</h1>
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
        name: "jaf_nosotros"
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
