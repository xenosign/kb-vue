<script setup></script>

<template>
  <!-- 주소 이동을 위한 router-link 설정, to 에 설정한 주소는 router 폴더의 index 에 반드시 정의가 되어 있어야만 한다 -->
  <router-link to="/">home</router-link>
  &nbsp;
  <!-- /todo 주소가 들어오면 /pages 폴더의 Todo.vue 컴포넌트로 이동 -->
  <router-link to="/todo">todo</router-link>
  <router-view />
</template>
