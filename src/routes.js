import Home from './components/Home.vue';
import Works from './components/Works.vue';
import Gallery from './components/Gallery.vue'
import works from './works/'

var routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/works',
        name: 'works',
        component: Works
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
  }
]

// works path
works.map((w) => {
  let obj = {
    path: `/${w.route}`,
    name: w.route,
    component: w
  } 
  routes.push(obj)
})

export default routes;
