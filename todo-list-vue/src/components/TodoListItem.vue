<template>
  <div>
    <li @click="$emit('toggleCompleted', todoItem.id)">
      <span
        :style="
          todoItem.completed
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        "
      >
        {{ todoItem.id }} {{ todoItem.todo }}
        {{ todoItem.completed ? '(완료)' : '' }}
      </span>
      <button @click.stop="$emit('deleteTodo', todoItem.id)">삭제</button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todoItem'],
  // props: {
  //   todoItem: { type: Object, required: true },
  // },
  emits: ['deleteTodo', 'toggleCompleted'],
};
</script>

<style lang="scss" scoped></style>
