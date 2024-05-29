<template>
  <div>
    <slot v-bind:msg="msg" :additionalMsg="additionalMsg"></slot>
  </div>
</template>

<script>
export default {
  name: 'ChildScopedSlot',
  data() {
    return {
      msg: '과연 나는 어떤 태그에 들어갈까? 와아아아아 너어어어어무 궁금하다 😜',
      additionalMsg: '11',
    };
  },
};
</script>
