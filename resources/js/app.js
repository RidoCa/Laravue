
require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import template
import Index from './components/Index.vue';
import Create from './components/Create.vue';
import Read from './components/Read.vue';
import Update from './components/Update.vue';


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//komponen
const routes = [
    { path: '/', component: Index },
    { path: '/create', component: Create },
    { path: '/read/:ids', component: Read, name:'readPost' },
    { path: '/:ids/edit', component: Update, name:'editPost' }
  ]

  //router instance
  const router = new VueRouter({
      routes // short for `routes: routes`
    //   mode : 'history'
  })


  const app = new Vue({
    router
  }).$mount('#app')
