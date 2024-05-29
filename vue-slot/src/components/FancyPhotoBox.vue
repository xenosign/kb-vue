<template>
  <div class="fancyPhotoBox">
    <slot name="title"></slot>
    <slot name="photo"></slot>
  </div>
</template>

<script>
export default {
  name: 'MagicBox',
};
</script>

<style scoped>
.fancyPhotoBox {
  text-align: center;
  padding: 30px 30px;
  border-radius: 30px;
  border: 10px solid #ccc;
  background-color: orange;
  margin: 30px 0px;
}
</style>
