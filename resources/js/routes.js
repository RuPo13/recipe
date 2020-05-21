import Vue from 'vue';
import VueRouter from 'vue-router';

import About from "./views/About";
import Contact from "./views/Contact";
import Users from "./views/Users";


let routes = [
    {
        path:'/',
        component: require('./views/Home')
    },

    {
        path:'/home',
        component: Users
    },

    {
        path:'/about',
        component: About
    },

    {
        path:'/contact',
        component: Contact
    },
    {
        path: '/*',
        redirect: { name: 'route-name' }
    }   
];


export default new VueRouter({
    
    mode: 'history',
    
    routes,

    
    linkActiveClass: 'is-active'
    

});