import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: function () {
      return import('../views/ContactoView.vue')
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: function () {
      return import('../views/BlogView.vue')
    }
  },
  {
    path: '/testimonios',
    name: 'testimonios',
    component: function () {
      return import('../views/Testimonios.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
