<template>
  <div>
    <ChildSlot>
      <!-- 자식 요소의 HTML 후손 요소로 보내고 싶은 것들을 보냅니다! -->
      <h1>테스트2</h1>
      <input type="text" placeholder="인풋도 들어 갈 수 있다구욧!" />
      <hr />
      <button>닫기</button>
      <br />
      <button>닫지 마요 ㅠㅠ</button>
    </ChildSlot>
  </div>
</template>

<script>
import ChildSlot from './ChildSlot.vue';

export default {
  name: 'ParentComponent',
  components: { ChildSlot },
};
</script>
