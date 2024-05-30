<script setup>
import Vue2Component from './components/Vue2Component.vue';
import Vue3Component from './components/Vue3Component.vue';
</script>

<template>
  <div>
    <Vue2Component />
    <Vue3Component />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { Vue2Component, Vue3Component },
};
</script>
