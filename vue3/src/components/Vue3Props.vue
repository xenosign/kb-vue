<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// props를 정의하고 기본값과 타입을 설정
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
