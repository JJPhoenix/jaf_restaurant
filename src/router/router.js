import jaf_home from "../view/jaf_home.vue";
import jaf_nosotros from "../view/jaf_nosotros.vue";
import jaf_reserva from "../view/jaf_reserva.vue";
import Vue from "vue";
import VueRouter from  "vue-router"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/home',
            component: jaf_home
        },
        {
            path: '/home',
            component: jaf_home,
        },
        {
            path: '/nosotros',
            component: jaf_nosotros,
        },
        {
            path: '/reserva',
            component: jaf_reserva
        }
    ]
})
