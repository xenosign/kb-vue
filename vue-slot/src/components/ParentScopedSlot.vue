<template>
  <div>
    <ChildScopedSlot v-slot:default="fromChild">
      <h1>{{ fromChild.msg }}</h1>
      <h1 v-if="fromChild.additionalMsg.length >= 1">
        {{ fromChild.additionalMsg }}
      </h1>
      <h1 v-else>메세지 없음</h1>
    </ChildScopedSlot>
  </div>
</template>

<script>
import ChildScopedSlot from './ChildScopedSlot.vue';

export default {
  name: 'ParentScopedSlot',
  components: { ChildScopedSlot },
};
</script>
