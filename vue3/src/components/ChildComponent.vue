<template>
  <div>
    <GrandChildComponent :drilling="drilling" />
  </div>
</template>

<script>
import GrandChildComponent from './GrandChildComponent.vue';

export default {
  name: 'ChildComponent',
  components: { GrandChildComponent },
  props: ['drilling'],
};
</script>
