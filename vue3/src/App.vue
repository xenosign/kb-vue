<template>
  <div>
    <h1>{{ msg }}</h1>
    <Vue3Emit :rand="num" @send-msg="emitHandler" />
  </div>
</template>

<script setup>
import Vue3Emit from './components/Vue3Emit.vue';
import { ref, defineProps } from 'vue';

const rand = parseInt(Math.random() * 20);
const num = ref(rand);
const msg = ref('랜덤 숫자를 맞춰 주세요');

function emitHandler(value) {
  msg.value = value;
}
</script>
