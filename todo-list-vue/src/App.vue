<script setup>
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <h1>Tetz's Todo List</h1>
    <InputTodo @addTodo="addTodo" />
    <TodoList
      :todoList="todoList"
      @deleteTodo="deleteTodo"
      @toggleCompleted="toggleCompleted"
    />
  </div>
</template>

<script>
export default {
  components: { InputTodo, TodoList },
  data() {
    return {
      todoList: [
        { id: 1, todo: 'Vue 부수기', completed: false },
        { id: 2, todo: 'JS 박살내기', completed: true },
        { id: 3, todo: '코테 뿌시기', completed: false },
        { id: 4, todo: '취업 뽀개기', completed: false },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      this.todoList.push({
        id: this.todoList.length + 1,
        todo: todo,
        completed: false,
      });
    },
    deleteTodo(id) {
      const index = this.todoList.findIndex((item) => id === item.id);
      this.todoList.splice(index, 1);
    },
    toggleCompleted(id) {
      const index = this.todoList.findIndex((item) => id === item.id);
      this.todoList[index].completed = !this.todoList[index].completed;
    },
  },
};
</script>

<style scoped></style>
