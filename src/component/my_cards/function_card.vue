<template>
    <div class="card-pasos">
        <div class="row justify-content-end card-pasos-numbers">
            <div class="col-4 text-right">
                <p>{{tittle_sub}}</p>
            </div>
        </div>
        <div class="card-pasos-container">
            <div class="card-pasos-number">
                <p>Res.</p>
                <p class="step"></p>
            </div>
            <article class="card-pasos-header">
                <div class="header-pasos">
                    <i class="fas fa-clipboard-list fa-3x "></i>
                    <span class="title-pasos response-pasos">{{title_card}}</span>
                </div>
            </article>

            <article class="card-pasos-body">
                <slot></slot>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "function_card",
        props:{
            title_card: String,
            tittle_sub: String
        }
    }
</script>

<style lang="scss">
    @import "src/asset/style/style.scss";
    .card-pasos{
        position: relative;
        &-numbers{
            text-align: center;
            color: $color-light-text;
            p{
                margin-bottom: 0.5px;
                font-weight: bold;
            }
        }
        &-number{
            color: $color-light-text;
            position: absolute;
            left: -10px;
            top: 35px;
            border-bottom-left-radius: 8px;
            border-top-left-radius: 8px;
            background-color: $color-primary;
            padding: 1em 0;
            padding-left: 10px;
            width: 60px;
            font-weight: bold;
            text-align: center;
            p{
                margin-bottom: .5em;
                line-height: 1;
                font-size: 14px;
            }
            .step{
                font-size: 38px;
                margin: 0;
            }

            @include mediaQ($large){
                left: -15px;
            }
        }
        &-seg{
            margin-top: 30px;
            .title-seg{
                color: $color-primary;
                font-size: 18px;
            }
        }
        &-container{
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 1px 1px 4px #ccc;
            @include mediaQ(992px){
                display: flex;
            }
            &-datos{
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 1px 1px 4px #ccc;
                padding: 0  1em 1.5em;
                margin-top: 10px;
                @include mediaQ(992px){
                    display: flex;
                }
            }
        }
        &-body{
            background-color: #F6F6F7;
            padding: 1.5em 1em ;
            @include mediaQ($large){
                width: 70%;
                padding:  1.5em 2em ;
            }
        }
        &-header{
            padding: 1.5em;
            color: $color-primary;
            @include mediaQ($large){
                padding: 1.5em 2em;
            }
            .card-header-title{
                display: flex;
                margin-bottom: 1em;
                font-size: 18px;
            }
            span{
                margin-left: .5em;
                font-size: 18px;
                line-height: 1.2;
            }
            @include mediaQ($large){
                width: 30%;
            }
        }
        .header-pasos{
            display: flex;
            margin-left: 40px;
            padding: 1em 0em;
            align-items: center;
        }
    }
</style>