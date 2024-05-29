<script setup>
import ParentFancyPhotoBox from './components/ParentFancyPhotoBox.vue';
import ParentModalComponent from './components/ParentModalComponent.vue';
import ParentNamedSlot from './components/ParentNamedSlot.vue';
import ParentScopedSlot from './components/ParentScopedSlot.vue';
import ParentComponent from './components/ParentSlot.vue';
</script>

<template>
  <div class="main">
    <ParentModalComponent />
    <!-- <ParentComponent /> -->
    <!-- <ParentNamedSlot /> -->
    <!-- <ParentScopedSlot /> -->
    <ParentFancyPhotoBox />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    ParentModalComponent,
    ParentNamedSlot,
    ParentScopedSlot,
    ParentFancyPhotoBox,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
