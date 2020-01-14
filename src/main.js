import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './routes'
import VueI18n from 'vue-i18n'
import messages from './locales/'
import VueGallery from 'vue-gallery'
import ImageGallery from './components/ImageGallery.vue'


Vue.component('v-gallery', VueGallery)
Vue.component('image-gallery', ImageGallery)

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
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(App)
})
