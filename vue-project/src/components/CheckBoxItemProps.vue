<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>

<script>
export default {
  name: 'CheckBoxItemProps',
  props: ['name', 'checked'],
};
</script>

<style lang="scss" scoped></style>
