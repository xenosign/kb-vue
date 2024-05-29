<script setup>
import ChildComponent from './components/ChildComponent.vue';
</script>

<template>
  <div>
    <ChildComponent :drilling="drilling" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drilling: '으아아~~ 어디까지 내려가는거에요',
    };
  },
  provide() {
    return {
      fly: '훗! 한번에 와버렸슈',
    };
  },
};
</script>
