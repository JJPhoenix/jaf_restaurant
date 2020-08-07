<template>
    <div class="jaf-restaurant">
        <nav-jaf/>
        <b-container>
            <router-view/>
        </b-container>
        <footer-jaf/>
    </div>
</template>

<script>
    import jaf_footer from "./component/jaf_footer.vue";
    import jaf_navBar from "./component/jaf_navBar.vue";
    export default {
        name: "App.vue",
        components:{
            "nav-jaf": jaf_navBar,
            "footer-jaf": jaf_footer,
        }
    }
</script>

<style lang="scss">
    @import "asset/style/style";
</style>
