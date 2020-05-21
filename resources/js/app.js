import './bootstrap';
import router from './routes';
import route from './route';



import App from "./components/App";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    render : h => h(App),
    routes
});
