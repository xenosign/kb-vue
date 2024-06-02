<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">오죠사마 5조에 어서와요 </span>
    <button class="navbar-toggler" type="button" @click="changeIsNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="navClass">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">홈</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">최현수</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/Gong">공연정</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/Moon">이태웅</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/Choi">최민준</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { reactive, computed } from 'vue';

const state = reactive({ isNavShow: false });
const navClass = computed(() =>
  state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
);
const changeIsNavShow = () => {
  state.isNavShow = !state.isNavShow;
};
</script>
