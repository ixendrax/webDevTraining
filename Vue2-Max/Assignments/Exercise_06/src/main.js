import Vue from 'vue';
import App from './App.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import ServerList from './ServerList.vue';
import ServerDetails from './ServerDetails.vue';

Vue.component('headerComp', Header);
Vue.component('footerComp', Footer);
Vue.component('serverlist', ServerList);
Vue.component('serverdetails', ServerDetails);

new Vue({
  el: '#app',
  render: h => h(App)
});
