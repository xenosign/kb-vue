<template>
  <div class="app-main">
    <nav class="app-nav">
      <router-link to="/">홈페이지</router-link>
      <router-link to="/about">라우터란?</router-link>
    </nav>
    <router-view class="app-router-view" />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style scoped>
.app-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
}

.app-nav {
  display: flex;
  gap: 30px;
  margin-bottom: 2em;
}

.app-router-view {
  text-align: center;
}
</style>
