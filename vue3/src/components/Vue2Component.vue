<!-- MyComponent.vue -->
<template>
  <div>
    <h1>Vue2 문법을 사용</h1>
    <p>Count : {{ count }}</p>
    <p>두배로! {{ double }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
