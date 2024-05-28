<script setup>
import InputTodo from './InputTodo.vue';
import TodoListItem from './TodoListItem.vue';
</script>

<template>
  <ul>
    <TodoListItem
      v-for="todoItem in todoList"
      :key="todoItem.id"
      :todoItem="todoItem"
      @deleteTodo="$emit('deleteTodo', $event)"
      @toggleCompleted="$emit('toggleCompleted', $event)"
    />
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  components: { TodoListItem },
  // props: {
  //   todoList: { type: Array, required: true },
  // },
  props: ['todoList'],
  emits: ['deleteTodo', 'toggleCompleted'],
};
</script>

<style lang="scss" scoped></style>
