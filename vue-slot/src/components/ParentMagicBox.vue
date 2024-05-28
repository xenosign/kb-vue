<template>
  <div>
    <MagicBox>
      <h1>진짜 아무거나 다?</h1>
    </MagicBox>
    <MagicBox>
      <img
        src="https://jjalbang.today/files/jjalbox/2022/03/20220317_6232f240083c1.gif"
        alt="장동민마멋"
      />
    </MagicBox>
  </div>
</template>

<script>
import MagicBox from './MagicBox.vue';

export default {
  name: 'ParentSlotComponent',
  components: { MagicBox },
};
</script>

<style scoped></style>
