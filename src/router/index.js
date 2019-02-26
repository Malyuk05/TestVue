import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/main/Home.vue'
import pageTwo from '../components/views/main/pageTwo.vue'
import Profile from '../components/views/profile/Profile.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/pageTwo',
      name: 'pageTwo',
      component: pageTwo
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile
    }
  ],
  mode: 'history'
})
