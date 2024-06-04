<template>
  <div></div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  todoItem: {
    id: {
      type: String,
      required: true,
    },
    todo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
