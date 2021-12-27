import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Post from './components/Post.vue'
import Profile from './components/Profile.vue'
// import Login from './components/Login.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Post,
    },
    {
      path: '/profile/:userName',
      name: 'profile',
      component: Profile,
      props: true,
    },
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Login,
    // }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
