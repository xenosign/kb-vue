<template>
  <main>
    <div style="display: flex; flex-direction: column; align-items: center">
      <h1>Todo List</h1>
      <!-- <div>
        <input type="text" v-model.trim="todo" />
        <button @click="addTodo">추가</button>
      </div>
      <TodoListItem
        v-for="todoItem in todoList.todoList"
        :todoItem="todoItem"
        :key="todoItem.id"
      /> -->
    </div>
  </main>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref, watch } from 'vue';
import TodoListItem from '@/components/TodoListItem.vue';

const todo = ref('');
const todoList = reactive({
  todoList: [],
});

async function getTodo() {
  try {
    const url = '/api/todos';
    const getTodoRes = await axios.get(url);

    todoList.todoList = getTodoRes.data;
  } catch (e) {
    alert('Todolist 데이터 통신 ERR 발생');
    console.log(e);
  }
}

async function addTodo() {
  try {
    const url = '/api/todos';
    const addTodoRes = await axios.post(url, {
      todo: todo.value,
      desc: todo.value,
    });

    // 데이터 갱신
    getTodo();
  } catch (e) {
    alert('Todolist 추가 ERR 발생');
    console.log(e);
  }
}

getTodo();
</script>
