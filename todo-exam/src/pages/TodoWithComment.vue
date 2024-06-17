<template>
  <div>
    <div>
      <h1>Todolist</h1>
      <!-- todo 리스트 추가를 위한 부분, 할일을 todo 라는 ref 변수로 받고 해당 내용을 addTodo 함수를 통해 서버에 추가한다 -->
      <input type="text" v-model.trim="todo" />
      <button @click="addTodo">추가</button>
    </div>
    <br />
    <ol>
      <!-- 투두리스트를 그리는 파트, 서버에서 받아온 데이터를 states 의 todoList 프로퍼티에 저장하므로 -->
      <!-- 해당 배열 데이터를 바탕으로 vfor 디렉티브를 사용하여 반복적으로 그려 준다 -->
      <li v-for="todoItem in states.todoList" :key="todoItem.id">
        <!-- todoList 의 배열 데이터에서 할일은 todo 에 완료 여부는 done 에 저장되어 있으므로 해당 데이터를 바탕으로 -->
        <!-- 투두 리스트의 내용을 출력 -->
        <span> {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }} </span>
        <!-- 수정 및 삭제 버튼-->
        <span>
          <!-- 수정 버튼, 해당 기능 까진 필요 없으므로 기능을 제거한 상태 -->
          <button>수정</button>
          /
          <!-- 삭제 버튼, 해당 버튼을 클릭하면 deleteTodo 가 실행되어 todolist 삭제가 발생 -->
          <button @click.stop="deleteTodo(todoItem.id)">삭제</button>
        </span>
      </li>
    </ol>
  </div>
</template>

<script setup>
// 통신을 위한 axios 임포트
import axios from 'axios';
// 서버에서 데이터를 받아오면 다시 vue 화면을 그려줘야 하므로 반응형 데이터인 ref 와 reactive 임포트
import { reactive, ref } from 'vue';

// todolist 저장을 위한 states 선언, 해당 객체의 todoList 에 배열 형태로 데이터를 서버에서 받아서 저장한다
const states = reactive({
  todoList: [],
});

// 할일 내용을 input 태그에서 받아서 저장하기 위한 변수 선언
const todo = ref('');

// 원래 서버에 대한 주소 요청은 http://localhost:3000 이지만 매번 타이핑하기 귀찮으므로
// vites.config.js 파일에 보면 해당 주소를 /api 로 줄여놓는 설정이 되어 있으며, 주석이 되어 있으니 확인 필요
// 다만, 실제로 작성할 필요는 없으며 기본으로 세팅 될 예정
const BASEURL = '/api/todos';

// Todo.vue 컴포넌트가 실행되면 서버에서 데이터를 받아오는 함수, 해당 함수가 실행되어야만 서버에서 데이터를 받아올 수 있다
async function fetchTodoList() {
  try {
    // axios 를 이용하여 GET Method 로 서버에 데이터 요청
    const getTodoRes = await axios.get(BASEURL);

    // 요청이 정상적으로 이루어지지 않으면 경고창을 띄우고 함수 종료
    if (getTodoRes.status !== 200) return alert('Todo 데이터 받아오기 실패');

    // 받아온 데이터를 반응형 데이터 states 의 todoList 에 넣어주기 --> 해당 데이터를 사용하여 todolist 를 그려준다
    states.todoList = getTodoRes.data;
  } catch (e) {
    alert('Todolist 데이터 통신 ERR 발생');
    console.log(e);
  }
}

// 할일 추가 함수
async function addTodo() {
  if (todo.value === '') return alert('할 일을 입력해 주세요!');
  try {
    // axios 를 이용하여 POST Method 로 서버에 todolist 추가하기
    const addTodoRes = await axios.post(BASEURL, {
      todo: todo.value,
      done: false,
    });

    // 요청이 정상적으로 이루어지지 않으면 경고창을 띄우고 함수 종료
    if (addTodoRes.status !== 201) return alert('Todo 추가 실패');

    // input 에 입력된 글을 초기화 하고, fetchTodoList 함수를 실행하여 추가된 데이터를 다시 받아와서 그려주기
    todo.value = '';
    fetchTodoList();
  } catch (err) {
    alert('Todolist 추가 작업 중, ERR 발생');
    console.log(err);
  }
}

// 할일 삭제 함수
async function deleteTodo(id) {
  try {
    // 삭제 요청은 delete Method 로 보내며, 어떤 todolist 를 삭제할지 알아야 하므로 id 값을 주소의 마지막에 붙여서 전달한다
    const deleteTodoRes = await axios.delete(BASEURL + `/${id}`);

    // 요청이 정상적으로 이루어지지 않으면 경고창을 띄우고 함수 종료
    if (deleteTodoRes.status !== 200) return alert('Todo 삭제 실패');

    // 삭제가 성공하면, fetchTodoList 함수를 실행하여 추가된 데이터를 다시 받아와서 그려주기
    fetchTodoList();
  } catch (err) {
    alert('Todolist 삭제 작업 중, ERR 발생');
    console.log(err);
  }
}

// Todo.vue 컴포넌트가 실행되면 fetchTodoList 함수를 실행하여 데이터 받아오기
fetchTodoList();
</script>
