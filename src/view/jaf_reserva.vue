<template>
    <div>
        <function_reserva
                title_card="Haz tu reserva"
                tittle_sub="Reserva">
            <form>
                <div class="form-row d-flex justify-content-center mt-3">
                    <div class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p class="font-weight-bold title-primary">Datos personales</p>
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iDNI">Número de DNI</label>
                        <input type="text" class="form-control" id="iDNI" aria-describedby="Ingresar DNI" maxlength="8">
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iNOMBRE">Nombre de la persona de reserva</label>
                        <input type="text" class="form-control" id="iNOMBRE" aria-describedby="Nombre de la persona de reserva">
                    </div>
                </div>

                <div class="form-row d-flex justify-content-center mt-3">
                    <div class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p class="font-weight-bold title-primary">Datos del local</p>
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iLOCAL">Local</label>
                        <input type="text" class="form-control" id="iLOCAL" aria-describedby="Local" placeholder="Local">
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iCANTIDAD">Cantidad de personas</label>
                        <input type="text" class="form-control" id="iCANTIDAD" aria-describedby="Cantidad" placeholder="Seleccionar cantidad">
                    </div>
                </div>
                <div class="form-row d-flex justify-content-end mt-3">
                    <div class="form-group col-12 col-sm-12 col-md-3 offset-md-9 col-lg-3 offset-lg-9 col-xl-3 offset-xl-9">
                        <button type="button" class="btn btn-light forth btn-block">Validar Datos</button>
                    </div>
                </div>
            </form>
        </function_reserva>
    </div>
</template>

<script>
    import function_card from "../component/my_cards/function_card.vue";
    export default {
        name: "jaf_reserva",
        components:{
            "function_reserva":function_card
        }
    }
</script>

<style scoped>

</style>
