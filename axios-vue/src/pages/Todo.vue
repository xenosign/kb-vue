<template>
  <main>
    <div>
      <h1>Todo List</h1>
      <!-- Todo 입력 파트 -->
      <div>
        <input type="text" v-model.trim="todo" />
        <button @click="addTodo">추가</button>
      </div>
      <br />
      <!-- 투두 리스트 -->
      <ol>
        <li v-for="todoItem in states.todoList" :key="todoItem.id">
          <!-- 투두 항목 -->
          <span
            :style="
              todoItem.done
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            "
            @click.stop="toggleTodo(todoItem.id)"
          >
            {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}
          </span>
          <!-- 수정 모드 -->
          <div v-if="todoItem.editing">
            <input type="text" v-model="todoEdit" />
            <button @click.stop="confirmEditTodo(todoItem.id)">확인</button>
            <button @click.stop="cancelEditTodo(todoItem.id)">취소</button>
          </div>
          <!-- 수정 모드 끝 -->

          <!-- 수정 및 삭제 버튼 -->
          <span v-if="!todoItem.editing">
            <button @click.stop="editTodo(todoItem.id)">수정</button>
            /
            <button @click.stop="deleteTodo(todoItem.id)">삭제</button>
          </span>
        </li>
      </ol>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref, provide, inject, computed } from 'vue';
import TodoListItem from '@/components/TodoListItem.vue';

const BASEURL = '/api/todos';

const states = reactive({
  todoList: [],
});

const todo = ref('');
const todoEdit = ref('');

async function fetchTodoList() {
  try {
    const getTodoRes = await axios.get(BASEURL);

    console.log(getTodoRes.data);
    states.todoList = getTodoRes.data;
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
  } catch (err) {
    alert('Todolist 추가 작업 중, ERR 발생');
    console.log(err);
  }
}

async function deleteTodo(id) {
  try {
    // 여기를 완성해 주세요
    const delTodoRes = await axios.delete(BASEURL + `/${id}`);

    if (delTodoRes.status !== 200) return alert('Todo 삭제 실패');

    fetchTodoList();
  } catch (err) {
    alert('Todolist 삭제 작업 중, ERR 발생');
    console.log(err);
  }
}

async function toggleTodo(id) {
  try {
    const targetTodo = states.todoList.find((todo) => todo.id === id);
    const payload = { ...targetTodo, done: !targetTodo.done };

    const toggleTodoRes = await axios.put(BASEURL + `/${id}`, payload);

    if (toggleTodoRes.status !== 200) return alert('Todo 변경 실패');

    fetchTodoList();
  } catch (err) {
    alert('Todolist 토글 작업 중, ERR 발생');
    console.log(err);
  }
}

function editTodo(id) {
  const targetTodo = states.todoList.find((todo) => todo.id === id);
  targetTodo.editing = true;
}

function cancelEditTodo(id) {
  const targetTodo = states.todoList.find((todo) => todo.id === id);
  targetTodo.editing = false;
  todoEdit.value = '';
}

async function confirmEditTodo(id) {
  try {
    const targetTodo = states.todoList.find((todo) => todo.id === id);
    const payload = { ...targetTodo, todo: todoEdit.value, editing: false };

    const toggleTodoRes = await axios.put(BASEURL + `/${id}`, payload);

    if (toggleTodoRes.status !== 200) return alert('Todo 변경 실패');

    todoEdit.value = '';
    fetchTodoList();
  } catch (err) {
    alert('Todolist 토글 작업 중, ERR 발생');
    console.log(err);
  }
}

fetchTodoList();
</script>
