<script setup>
defineProps({
  todo: { type: Object, required: true },
});
</script>

<template>
  <li>
    <router-link :to="{ name: 'todo/id', params: { id: todo.id } }">
      {{ todo.todo }}
    </router-link>
  </li>
</template>
