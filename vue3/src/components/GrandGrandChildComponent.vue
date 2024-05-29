<template>
  <div>
    <h1>드디어 도착한 props 의 내용은!?</h1>
    <h2>Inject 로 날아온 데이터 : {{ fly }}</h2>
    <h2>Props 로 굴러온 데이터 : {{ drilling }}</h2>
  </div>
</template>

<script>
export default {
  name: 'GrandGrandChildComponent',

  props: ['drilling'],
  inject: ['fly'],
};
</script>
