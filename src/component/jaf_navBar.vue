<template>
    <div class="header">
        <b-navbar toggleable="lg" class="jaf_navbar" variant="primary" type="dark">
            <b-navbar-brand href="#" class="light">
                <img src="src/asset/img/logo.png" class="nav-logo" alt="logo" />
                JAF Restaurant
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav >
                <b-navbar-nav class="ml-auto text-right">
                    <b-nav-item><router-link to="/home" class="router-link">Home</router-link></b-nav-item>
                    <b-nav-item><router-link to="/nosotros" class="router-link">Nosotros</router-link></b-nav-item>
                    <b-nav-item><router-link to="/reserva" class="router-link">Reserva</router-link></b-nav-item>
                    <b-nav-item><router-link to="/blog" class="router-link">Blog</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "jaf_navBar",
    }
</script>

<style scoped lang="scss">
    .header{
        .jaf_navbar{
            background: transparent !important;
            padding: 1.5em 2em;
            .nav-logo{
                height: 2em;
            }
            .router-link{
                text-decoration: none;
                color: white;
            }
            .router-link::after{
                content: '';
                width: 0;
                height: 2px;
                background: yellow;
                display: block;
                margin: auto;
                transition: .5s;
            }
            .router-link:hover::after{
                width: 100%;
            }
        }
        .white{
            color: white;
        }
    }

</style>
