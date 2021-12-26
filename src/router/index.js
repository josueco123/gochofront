import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Register from '../views/Register.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/test', component: HelloWorld },
    { path: '/registro', component: Register },
];

const router = createRouter({

    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});


export default router;

