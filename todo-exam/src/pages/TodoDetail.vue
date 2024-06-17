<script setup>
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const BASE = '/api/todo';

const currentRoute = useRoute();
const router = useRouter();
const id = currentRoute.params.id;
const todo = ref({});

const url = `${BASE}/${id}`;

const fetchTodoDetail = async () => {
  try {
    const fetchTodoDetailRes = await axios.get(url);

    if (fetchTodoDetailRes.status !== 200) alert('todo detail 받기 실패');

    console.log(fetchTodoDetailRes.data);

    todo.value = fetchTodoDetailRes.data;
  } catch (error) {
    console.log(error);
  }
};

const back = () => {
  router.push('/todo');
};

fetchTodoDetail(); //초기 데이터 로드 함수 호출
</script>

<template>
  <div>
    <h2>제목: {{ todo.title }}</h2>
    <hr />
    {{ todo.desc }}
    <div>
      <button @click="back">돌아가기</button>
    </div>
  </div>
</template>

<style scoped></style>
