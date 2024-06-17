<template>
  <div>
    <div>
      <h1>Todolist</h1>
      <input type="text" v-model.trim="todo" />
      <button @click="addTodo">추가</button>
    </div>
    <br />
    <ol>
      <li v-for="todoItem in todoList" :key="todoItem.id">
        <router-link :to="{ name: 'todo/id', params: { id: todoItem.id } }">
          {{ todoItem.todo }}
        </router-link>
        <span>
          <button @click.stop="deleteTodo(todoItem.id)">삭제</button>
        </span>
      </li>
    </ol>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const todoList = ref([]);
const todo = ref('');

const BASEURL = '/api/todo';
const router = useRouter();

async function fetchTodoList() {
  try {
    const getTodoRes = await axios.get(BASEURL);

    if (getTodoRes.status !== 200) return alert('Todo 데이터 받아오기 실패');

    todoList.value = getTodoRes.data;
  } catch (e) {
    alert('Todolist 데이터 통신 ERR 발생');
    console.log(e);
  }
}

async function addTodo() {
  if (todo.value === '') return alert('할 일을 입력해 주세요!');
  try {
    const addTodoRes = await axios.post(BASEURL, {
      todo: todo.value,
      done: false,
    });

    if (addTodoRes.status !== 201) return alert('Todo 추가 실패');

    todo.value = '';
    fetchTodoList();

    router.push('/todo');
  } catch (err) {
    alert('Todolist 추가 작업 중, ERR 발생');
    console.log(err);
  }
}

async function deleteTodo(id) {
  try {
    const deleteTodoRes = await axios.delete(BASEURL + `/${id}`);

    if (deleteTodoRes.status !== 200) return alert('Todo 삭제 실패');

    fetchTodoList();
  } catch (err) {
    alert('Todolist 삭제 작업 중, ERR 발생');
    console.log(err);
  }
}

fetchTodoList();
</script>
