<template>
    <div class="jaf-footer">
        <p>@Todos los derechos reservados a JAF restaurant 2020.</p>
    </div>
</template>

<script>
    export default {
        name: "jaf_footer"
    }
</script>

<style scoped lang="scss">
    .jaf-footer{
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        right: 0;
        bottom: 0;
        left: 0;
        p{
            color: white;
        }
    }
</style>
