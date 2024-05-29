<template>
  <div>
    <div class="top">
      <h1>뭐든지 기울이는 TOP 슬롯 입니다!</h1>
      <slot name="top"></slot>
    </div>
    <div class="bottom">
      <h1>뭐든지 밑줄치는 BOTTOM 슬롯 입니다!</h1>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildNamedSlot',
};
</script>

<style scoped>
.top {
  font-style: italic;
  background-color: skyblue;
}
.bottom {
  text-decoration: underline;
  background-color: orange;
}
</style>
