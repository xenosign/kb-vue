<template>
  <div><Vue3Props :msg="msg" /></div>
</template>

<script setup>
import Vue3Props from './components/Vue3Props.vue';
import { ref } from 'vue';

const msg = ref('props 로 전달');
</script>
