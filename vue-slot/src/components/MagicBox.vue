<template>
  <div class="magicBox">
    <h1>무엇이든 예쁘게 담아주는 MagicBox</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MagicBox',
};
</script>

<style scoped>
.magicBox {
  text-align: center;
  width: 500px;
  padding: 30px;
  border-radius: 30px;
  border: 10px solid #ccc;
  background-color: orange;
  margin: 30px 0px;
}
</style>
