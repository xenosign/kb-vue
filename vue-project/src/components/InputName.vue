<template>
  <div style="border: solid 1x gray; padding: 5px">
    이름: <input type="text" v-model="name" />
    <button @click="$emit('nameChanged', { name, test: 'test' })">
      이벤트 발신
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style lang="scss" scoped></style>
