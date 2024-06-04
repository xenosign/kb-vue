import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todo', () => {
  const state = reactive({
    todoList: [
      { id: 1, todo: '스켈레톤 프로젝트 조 구성하기(금요일)', done: false },
      { id: 2, todo: '마니또 티안나게 챙겨주기', done: false },
      { id: 3, todo: '스켈레톤 프로젝트 아이디어 구상하기', done: true },
      { id: 4, todo: '현충일에 뭐하지!?', done: false },
    ],
  });

  const addTodo = (todo) => {
    state.todoList.push({ id: state.todoList.length + 1, todo, done: false });
  };

  const deleteTodo = (id) => {
    const index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList.splice(index, 1);
  };

  const toggleDone = (id) => {
    const index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList[index].done = !state.todoList[index].done;
  };

  const doneCount = computed(
    () => state.todoList.filter((todoItem) => todoItem.done === true).length
  );

  const todoList = computed(() => state.todoList);

  return { todoList, doneCount, addTodo, deleteTodo, toggleDone };
});
