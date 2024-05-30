<template>
  <div>
    <h1>드디어 도착한 props 의 내용은!?</h1>
    <h2>Provide 로 날아온 데이터 배열 출력</h2>
    <ul>
      <li v-for="member in flyArr">
        소속 그룹: {{ member.team }} / 이름 : {{ member.name }}
      </li>
    </ul>
    <h2>Props 로 굴러온 데이터 : {{ drilling }}</h2>
  </div>
</template>

<script>
export default {
  name: 'GrandGrandGrandChildComponent',
  props: ['drilling'],
  inject: ['flyArr'],
};
</script>
