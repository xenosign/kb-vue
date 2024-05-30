<template>
  <div>
    <input type="text" v-model.number="inputNum" />
    <button @click="checkAnswer">정답!</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { defineProps } from 'vue';

// props를 정의하고 기본값과 타입을 설정
const props = defineProps({
  rand: {
    type: Number,
    required: true,
  },
});

const inputNum = ref(0);

const emit = defineEmits(['send-msg']);

function checkAnswer() {
  let msg = '';

  if (inputNum.value < props.rand) {
    msg = 'UP';
  } else if (inputNum.value > props.rand) {
    msg = 'DOWN';
  } else {
    msg = '정답입니다!';
  }
  emit('send-msg', msg);
}
</script>
