<template>
  <div class="main">
    <ParentModalComponent />
  </div>
</template>

<script setup>
import ParentModalComponent from './components/ParentModalComponent.vue';
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
