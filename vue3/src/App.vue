<script setup>
import ColorEmit from './components/ColorEmit.vue';
import PropsList from './components/PropsList.vue';
import PropsList2 from './components/PropsList2.vue';
import SendNameComponent from './components/SendNameComponent.vue';
</script>

<!-- <template>
  <div>
    <h1>너의 이름은 {{ name }}</h1>
    <SendNameComponent @nameChanged="nameChangeHandler" />
  </div>
</template> -->

<template>
  <div :style="{ backgroundColor: color }">
    <h1>저의 색상을 정해주세요!!</h1>
    <ColorEmit @colorChange="colorChangeHandler" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      color: '',
    };
  },
  methods: {
    colorChangeHandler(payload) {
      this.color = payload.color;
    },
  },
};
</script>

<style scoped></style>
