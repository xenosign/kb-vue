<template>
  <div>
    <li>
      <span
        :style="
          todoItem.done
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        "
      >
        {{ todoItem.todo }} / {{ todoItem.desc }}
        {{ todoItem.done ? '(완료)' : '' }}
      </span>
      <button @click.stop="$emit('deleteTodo', todoItem.id)">삭제</button>
    </li>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  todoItem: {
    id: {
      type: String,
      required: true,
    },
    todo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
