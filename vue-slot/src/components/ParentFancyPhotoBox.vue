<template>
  <div>
    <FancyPhotoBox>
      <template v-slot:title>
        <h1>지겨운 장동민 마멋</h1>
      </template>
      <template v-slot:photo>
        <img
          src="https://jjalbang.today/files/jjalbox/2022/03/20220317_6232f240083c1.gif"
          alt="장동민마멋"
        />
      </template>
    </FancyPhotoBox>
  </div>
</template>

<script>
import FancyPhotoBox from './FancyPhotoBox.vue';

export default {
  name: 'ParentSlotComponent',
  components: { FancyPhotoBox },
};
</script>

<style scoped></style>
