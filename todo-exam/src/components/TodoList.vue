<script setup>
import TodoItem from '@/components/TodoItem.vue';

defineProps({
  todos: { type: Array, required: true },
});
</script>

<template>
  <ol>
    <TodoItem
      v-for="todoItem in todos"
      :key="todoItem.id"
      :todo="todoItem"
    ></TodoItem>
  </ol>
</template>
