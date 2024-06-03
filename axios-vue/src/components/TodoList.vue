<template>
  <ul>
    <TodoListItem />
  </ul>
</template>

<script setup>
import { defineProps } from 'vue';
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
