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
            
            <div class="blog-body pt-3">
                <div class="row row-content">
                    <div class="col-12 col-sm-4 order-sm-last col-md-3">
                        <h3>Aperitivos y Piqueos deliciosos</h3>
                    </div>
                    <div class="col col-sm order-sm-first col-md">
                        <div class="media">
                            <img class="d-flex mr-3 img-thumbnail align-self-center" src="" alt="uthappizza">
                            <div class="media-body">
                                <h2 class="mt-0">Tequeños, Yuquitas, Sanguches y mas!<br> <span class="badge badge-pill badge-danger">Rico</span> <span class="badge badge-pill badge-warning">Rapido</span> <span class="badge badge-pill badge-warning">Facil de hacer</span> </h2>
                                <p class="d-none d-sm-block">
                                    
                                </p>
                            </div>
                        </div>
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
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>
          </b-carousel>
            
        </div>

</template>

<script>
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
            background-image: url("~Img/fondo_blog.jpg");
            height: 10em;
        }
        
    }

</style>
