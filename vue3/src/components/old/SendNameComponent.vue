<template>
  <div>
    <input type="text" v-model.trim="name" />
    <button @click="$emit('nameChanged', { name })">이름 전달!</button>
  </div>
</template>

<script>
export default {
  name: 'SendNameComponet',
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style lang="scss" scoped></style>
