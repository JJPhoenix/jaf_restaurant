<template>
    <div>
        <function_reserva
                title_card="Haz tu reserva"
                tittle_sub="Reserva"
        des_card="Toda la reserva se confirmará por celular.">
            <form>
                <p>(*)Se recomiendo llegar 5 minutos antes de su reserva.</p>
                <p>(*)Se dara un tolerancia de 10 minutos.</p>
                <div class="form-row d-flex justify-content-center mt-3">
                    <div class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p class="font-weight-bold title-primary">Datos personales</p>
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iDNI">Número de DNI</label>
                        <input type="text" class="form-control" id="iDNI" aria-describedby="Ingresar DNI" maxlength="8" v-model="dni_client">
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iNOMBRE">Nombre de la persona de reserva</label>
                        <input type="text" class="form-control" id="iNOMBRE" aria-describedby="Nombre de la persona de reserva" v-model="name_client">
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iPHONE">Celular</label>
                        <input type="text" class="form-control" id="iPHONE" aria-describedby="Celular de la persona de reserva" v-model="phone_client">
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                    </div>
                </div>

                <div class="form-row d-flex justify-content-center mt-3">
                    <div class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p class="font-weight-bold title-primary">Datos del local</p>
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iLOCAL">Local</label>
                        <select class="form-control custom-select" id="iLOCAL" v-model="local_client">
                            <option>Miraflores</option>
                            <option>Surco</option>
                            <option>Chorrillos</option>
                            <option>Barranco</option>
                        </select>
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iCANTIDAD">Cantidad de personas</label>
                        <input type="number" class="form-control" id="iCANTIDAD" aria-describedby="Cantidad" placeholder="Seleccionar cantidad" v-model="number_client" max="16" min="1">
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <label for="iHora">Hora</label>
                        <input type="text" class="form-control" id="iHora" aria-describedby="Hora" placeholder="Ponga hora de asistencia" v-model="hour_client">
                    </div>
                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                    </div>
                </div>
                <div class="form-row d-flex justify-content-end mt-3">
                    <div class="form-group col-12 col-sm-12 col-md-3 offset-md-9 col-lg-3 offset-lg-9 col-xl-3 offset-xl-9">
                        <button type="button" class="btn btn-light btn-block btn_back" v-b-modal="'Realizar-reserva'">Realizar reserva</button>
                    </div>
                </div>
            </form>
        </function_reserva>
        <b-modal
                id="Realizar-reserva"
                title="Reserva"
                @ok="cargar">
            <div>
                <p v-if="mess">
                    Llene todo los campos por favor.
                </p>
                <p v-else>
                    Se realiza la reserva a nombre de <strong>{{name_client}}</strong> identificado(a) con el dni <strong>{{dni_client}}</strong>.
                    Dicha reserva a sido seleccionada en nuestro local <strong>{{local_client}}</strong> para un total de <strong>{{number_client}}</strong> comesales a las <strong>{{hour_client}}</strong>.
                </p>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import function_card from "../component/my_cards/function_card.vue";
    export default {
        name: "jaf_reserva",
        components:{
            "function_reserva":function_card,
        },
        data:function () {
            return{
                dni_client:null,
                phone_client:null,
                name_client: null,
                local_client: null,
                number_client:null,
                hour_client:null,
                mess: true
            }
        },
        methods:{
            cargar: function(){
                this.dni_client=null;
                this.phone_client=null;
                this.name_client=null;
                this.local_client=null;
                this.number_client=null;
                this.hour_client=null;
                this.hour_client=null;
                this.mess=true
            }
        },
        watch:{
            hour_client:function () {
                this.mess = false
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/asset/style/style";
    .btn_back{
        background-color: $color-primary;
        color: white;
    }
    .btn_back:hover{
        background-color:$color-primary_light
    }
</style>
