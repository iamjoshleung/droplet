
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vodal from 'vodal';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app-dashboard', require('./components/AppDashboard.vue'));
Vue.component('header-top', require('./components/Header.vue'));
Vue.component('navbox', require('./components/Navbox.vue'));
Vue.component(Vodal.name, Vodal);

const app = new Vue({
    el: '#app',
    data: {
      url: {
        dashboard: laroute.route('dashboard'),
        request: laroute.route('requests.get'),
        send: laroute.route('requests.send'),
        history: laroute.route('history'),
        userAll: laroute.route('users.all')
      }
    }
});
