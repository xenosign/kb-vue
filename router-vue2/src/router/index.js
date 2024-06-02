import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Dynamic from '@/pages/Dynamic.vue';
import About from '@/pages/About.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/dynamic/:mood',
      name: 'Dynamic',
      component: Dynamic,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;
