<template>
        <div class="container">
            <div class="blog-title">
                <div class="row row-header">
                    <div class="col-12 blog-fondo">
                        <h1>Si puedes verlo, puedes hacerlo!</h1>
                        <small>
                            JAF Restaurant presenta su blog culinario donde encontraras distintas recetas que podras hacer y disfrutar!
                        </small>
                    </div>
                </div>
            </div>

            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://tecnohotelnews.com/wp-content/uploads/2018/04/siete-claves-para-ofrecer-platos-saludables-atractivos-a-los-comensales-1280x720.jpg" class="img-fluid"> 
              <h1> Come saludable y desde casa</h1>
              <p>Aprende una receta saludable diaria en este cuarentena</p> 
            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://www.infohostelero.com/wp-content/uploads/2018/04/colores-comida.jpg" class="img-fluid"> 
              <h1>Agrega color, agrega alegría</h1>
              <p>Conoce que verduras y vegetales no deben faltar en tus platos de comida</p> 
            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://www.infohostelero.com/wp-content/uploads/2018/04/carta-restaurante.jpg" class="img-fluid"> 
              <h1>Tendencia en las cartas culinarias</h1>
              <p>Conoce las nuevas tendencias en platos a la carta con esta nueva normalidad</p> 
            </b-carousel-slide>

          </b-carousel>

          <div class="panel-blog pt-4">
            <function_panel_blog title_card="Como el coronavirus está matando lentamente los restaurantes buffet en Estados Unidos" tittle_sub="Mundo" etiqueta_pb="Buffets">
              <h1>Una experiencia culinaria amada por generaciones en Estados Unidos y otros países está en peligro por la pandemia de coronavirus: los buffets.</h1>
              <img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/9277/production/_113459473_gettyimages-1141644868.jpg" alt="" class="img-fluid">
            </function_panel_blog>
          </div>

          <div class="panel-blog pt-4">
            <function_panel_blog title_card="Los 10 mejores libros de cocina peruana" tittle_sub="Peru" etiqueta_pb="Recetas">
              <h1>Aquí algunos de los mejores libros de cocina peruana que han sido reconocidos internacionalmente.</h1>
              <img src="https://milrecetasperuanas.com/wp-content/uploads/2018/12/libros-de-cocina-peruana.jpg" alt="" class="img-fluid">
            </function_panel_blog>
          </div>

          <div class="panel-blog pt-4 pb-4">
            <function_panel_blog title_card="Coronavirus en Perú: ¿funciona el delivery durante la cuarentena?" tittle_sub="Peru" etiqueta_pb="Actualidad">
              <h1>Sólo algunas empresas y aplicaciones de reparto a domicilio están funcionando durante el estado de emergencia.</h1>
              <img src="https://peru.as.com/peru/imagenes/2020/03/29/tikitakas/1585503117_892562_1585503331_noticia_normal.jpg" alt="" class="img-fluid">
            </function_panel_blog>
          </div>

        </div>

</template>

<script>
    import function_card from "../component/my_cards/function_card_pb.vue";
    export default {
      name: "jaf_blog",
          data() {
        return {
          slide: 0,
          sliding: null
        }
      },
      methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
      },
      components:{
        "function_panel_blog":function_card
      }
    }
</script>

<style scoped lang="scss">
    .blog-title{
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
        .blog-fondo{
            height: 10em;
        }     
    }
    .panel-blog{
      h1{
        font-size: 30px;
      }
    }

</style>
