<template>
  <div>
    <h1>Todo List</h1>
    <!-- 입력 파트 -->
    <div>
      <input type="text" v-model.trim="todo" />
      <!-- 핸들러 거는 거 보여줄 것 -->
      <button @click="addTodoHandler(todo)">추가</button>
    </div>
    <br />
    <!-- 리스트 파트 -->
    <ol>
      <!-- 투두 항목 -->
      <li v-for="todoItem in todoList" :key="todoItem.id">
        <span
          v-bind:style="
            todoItem.done
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          "
          v-on:click="toggleTodo(todoItem.id)"
        >
          {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}
        </span>
        <!-- 수정 모드 -->
        <div v-if="todoItem.editing">
          <input type="text" v-model.trim="todoEdit" />
          <!-- 핸들러 거는 거 보여줄 것 -->
          <button @click.stop="confirmEditTodoHandler(todoItem.id, todoEdit)">
            확인
          </button>
          <button @click.stop="cancelEditTodo(todoItem.id)">취소</button>
        </div>

        &nbsp;
        <span v-if="!todoItem.editing">
          <button @click.stop="editTodo(todoItem.id)">수정</button>
          /
          <button v-on:click.stop="deleteTodo(todoItem.id)">삭제</button>
        </span>
      </li>
    </ol>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import { useTodoListStore } from '@/stores/todoList.js';

const todo = ref('');
const todoEdit = ref('');

const todoListStore = useTodoListStore();
const {
  fetchTodoList,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  cancelEditTodo,
  confirmEditTodo,
} = todoListStore;

const todoList = computed(() => todoListStore.todoList);

const addTodoHandler = (newTodo) => {
  todo.value = '';
  addTodo(newTodo);
};

const confirmEditTodoHandler = (id, newTodoEdit) => {
  todoEdit.value = '';
  confirmEditTodo(id, newTodoEdit);
};

fetchTodoList();
</script>
