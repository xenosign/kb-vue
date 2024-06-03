<template>
  <div>
    <input type="text" v-model.trim="todo" @keyup.enter="addTodoHandler" />
    <button @click="addTodoHandler">추가</button>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todo: '',
    };
  },
  emits: ['addTodo'],
  methods: {
    addTodoHandler() {
      this.$emit('addTodo', this.todo);
      this.todo = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
