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
      flyArr: [
        { name: '민지', team: 'NewJeans' },
        { name: '하니', team: 'NewJeans' },
        { name: '다니엘', team: 'NewJeans' },
        { name: '해린', team: 'NewJeans' },
        { name: '혜인', team: 'NewJeans' },
      ],
    };
  },
};
</script>
