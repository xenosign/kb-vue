<template>
  <div>
    <GrandGrandChildComponent :drilling="drilling" />
  </div>
</template>

<script>
import GrandGrandChildComponent from './GrandGrandChildComponent.vue';

export default {
  name: 'GrandChildComponent',
  components: { GrandGrandChildComponent },
  props: ['drilling'],
};
</script>
