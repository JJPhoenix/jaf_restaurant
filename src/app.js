import vue from 'vue';
import app from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

vue.use(BootstrapVue)
new vue({
    router,
    el:'#restaurant-jaf',
    render: h=> h(app),
    store
});
