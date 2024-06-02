import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/Choi',
      name: 'Choi',
      component: () => import('@/pages/Choi.vue'),
    },
    {
      path: '/Moon',
      name: 'Moon',
      component: () => import('@/pages/Moon.vue'),
    },
    {
      path: '/Gong',
      name: 'Gong',
      component: () => import('@/pages/Gong.vue'),
    },
  ],
});

export default router;
