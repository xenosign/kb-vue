<template>
  <div>
    <GrandGrandGrandChildComponent :drilling="drilling" />
  </div>
</template>

<script>
import GrandGrandGrandChildComponent from './GrandGrandGrandChildComponent.vue';

export default {
  name: 'GrandGrandChildComponent',
  components: { GrandGrandGrandChildComponent },
  props: ['drilling'],
};
</script>
