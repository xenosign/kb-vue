<template>
  <div>
    <h1>전송 된 텍스트 : {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Receiver',
  created() {
    this.emitter.on('message', this.receiveHandler);
  },
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    receiveHandler(msg) {
      this.msg = msg;
    },
  },
};
</script>

<style lang="scss" scoped></style>
