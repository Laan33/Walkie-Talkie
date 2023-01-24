import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component:()=> import('../views/Home.vue')},
    {path: '/register', component: () => import('../views/Register.vue')},
    {path: '/sign-in',component: () => import('../views/SigIn.vue')},
    {path: '/feed',component: () => import('../views/Feed.vue')},
  ],
});

export default router
