<!-- MyComponent.vue -->
<template>
  <div>
    <h1>Vue3 Counter</h1>
    <p>Count : {{ count }}</p>
    <p>두배로! {{ double }}</p>
    <p>지금가지 계산한 횟수 : {{ counter }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const count = ref(0);
const counter = ref(0);
const double = computed(() => {
  return count.value * 2;
});

function increment() {
  counter.value++;
  count.value++;
}

function decrement() {
  counter.value++;
  count.value--;
}
</script>
