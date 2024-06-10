import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import axios from 'axios';

export const useTodoListStore = defineStore('todoList', () => {
  const BASEURI = '/api/todos';
  const state = reactive({
    todoList: [],
  });

  // localhost:3000
  const BASEURL = '/api/todos';

  async function fetchTodoList() {
    try {
      const fetchTodoRes = await axios.get(BASEURL);

      state.todoList = fetchTodoRes.data;
    } catch (error) {
      alert('TodoList 데이터 통신 Err 발생');
      console.log(error);
    }
  }

  // 이제는 값을 매개변수로 받아야 함
  async function addTodo(todo) {
    if (todo.value === '') return alert('할 일을 입력해 주세요!');

    try {
      // 적용
      const newTodo = { todo: todo, done: false };
      const addTodoRes = await axios.post(BASEURL, newTodo);

      if (addTodoRes.status !== 201) return alert('Todo 추가 실패');

      // 삭제 해야함 todo.value = '';
      fetchTodoList();
    } catch (error) {
      alert('Todolist 추가 작업 중, ERR 발생');
      console.log(error);
    }
  }

  async function deleteTodo(id) {
    try {
      // /api/todos/12
      const delTodoRes = await axios.delete(BASEURL + `/${id}`);

      if (delTodoRes.status !== 200) return alert('Todo 삭제 실패');

      fetchTodoList();
    } catch (error) {
      alert('Todolist 삭제 중, Err 발생');
      console.log(error);
    }
  }

  async function toggleTodo(id) {
    try {
      const targetTodo = state.todoList.find((todo) => todo.id === id);
      const payload = { ...targetTodo, done: !targetTodo.done };

      const toggleTodoRes = await axios.put(BASEURL + `/${id}`, payload);

      if (toggleTodoRes.status !== 200) return alert('Todo toggle 실패');

      fetchTodoList();
    } catch (error) {
      alert('Todolist 토글 작업 중 ERR 발생');
      console.log(error);
    }
  }

  function editTodo(id) {
    const targetTodo = state.todoList.find((todo) => todo.id === id);
    targetTodo.editing = true;
  }

  function cancelEditTodo(id) {
    const targetTodo = state.todoList.find((todo) => todo.id === id);
    targetTodo.editing = false;
  }

  // todoEdit 매개변수 받기
  async function confirmEditTodo(id, todoEdit) {
    if (todoEdit.value === '') return alert('수정 내용을 입력하세요!');

    try {
      const targetTodo = state.todoList.find((todo) => todo.id === id);
      // todo에 넣어주기
      const payload = { ...targetTodo, todo: todoEdit, editing: false };

      const editTodoRes = await axios.put(BASEURL + `/${id}`, payload);

      if (editTodoRes.status !== 200) return alert('Todo 수정 실패');

      // 삭제 해야함 todoEdit.value = '';

      fetchTodoList();
    } catch (error) {
      alert('수정 작업 중 ERR 발생');
      console.log(error);
    }
  }

  const todoList = computed(() => state.todoList);
  return {
    todoList,
    fetchTodoList,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    cancelEditTodo,
    confirmEditTodo,
  };
});
