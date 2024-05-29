<template>
  <div style="border: 1px solid black; padding: 30px">
    <slot><!-- 여기에 부모가 보낸 요소가 들어 갑니다! --></slot>
  </div>
</template>

<script>
export default {
  name: 'ChildSlot',
};
</script>
