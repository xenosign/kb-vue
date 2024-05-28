<script setup>
import ParentMagicBox from './components/ParentMagicBox.vue';
import ParentModalComponent from './components/ParentModalComponent.vue';
</script>

<template>
  <div class="main">
    <ParentModalComponent />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { ParentMagicBox, ParentModalComponent },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
