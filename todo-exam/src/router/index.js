import { createRouter, createWebHistory } from 'vue-router';
// 주소에 매칭 시킬 컴포넌트 불러오기, 컴포넌트 이므로 대문자로 시작하며 해당 이름은 아래의 이름과 일치 해야만 한다
import Home from '@/pages/Home.vue';
import Todo from '@/pages/Todo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 뷰에서 이동이 가능한 주소를 미리 정의하는 부분, App vue 의 router-link 의 to 부분에 들어갈 주소와
  // 해당 주소 요청이 들어왔을 때, 매칭시킬 컴포넌트를 미리 정의한다
  // 컴포넌트는 위에서 반드시 import 가 필요하며, import 한 이름과 아래의 컴포넌트 명은 반드시 일치해야 한다
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
  ],
});

export default router;
