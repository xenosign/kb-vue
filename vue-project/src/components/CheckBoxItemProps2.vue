<template>
  <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
</template>

<script>
export default {
  name: 'CheckBoxItemProps2',
  props: ['idol'],
};
</script>

<style lang="scss" scoped></style>
