import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Register from '../views/Register.vue'
import TaskList from '../views/TasksView/TaskList.vue';
import CreateTask from '../views/TasksView/CreateTask.vue';
import EditTask from '../views/TasksView/EditTask.vue';

const routes = [
    { path: '/', component: Home , redirect:'/login' },
    { path: '/login', component: Login },
    { path: '/test', component: HelloWorld },
    { path: '/registro', component: Register },
    { path: '/task', component: TaskList },
    { path: '/create', component: CreateTask },
    { path: '/edit', component: EditTask, name: 'edit'},
    
];

const router = createRouter({

    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});


export default router;

