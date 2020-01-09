import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './routes'
import VueI18n from 'vue-i18n'
import VueExpandableImage from 'vue-expandable-image'
import messages from './locales/'

Vue.use(VueExpandableImage)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pt',
  messages
})

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active',
});

new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(App)
})
