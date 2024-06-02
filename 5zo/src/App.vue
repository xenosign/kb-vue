<template>
  <div class="container">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
// import { ref, watchEffect } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute();
// const currentPath = ref(route.path);

// watchEffect(() => {
//   currentPath.value = route.path;
//   console.log('주소가 변경되었습니다:', currentPath.value);
// });
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
