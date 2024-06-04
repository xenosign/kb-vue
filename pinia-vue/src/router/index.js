import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Counter from '@/pages/Counter.vue';
import Todo from '@/pages/Todo.vue';
import TodoList from '@/pages/TodoList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
