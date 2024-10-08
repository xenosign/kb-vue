import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Counter from '@/components/Counter.vue';
import Todo from '@/pages/Todo.vue';
import TodoList from '@/pages/TodoList.vue';
import KakaoLoginHandler from '@/components/KakaoLoginHandler.vue';
import Chat from '@/pages/Chat.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
    {
      path: '/oauth/kakao',
      name: 'KakaoLoginHandler',
      component: KakaoLoginHandler,
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList,
    },
  ],
});

export default router;
