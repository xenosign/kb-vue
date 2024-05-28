<script setup>
import ModalComponent from './ModalComponent.vue';
</script>

<template>
  <div>
    <button @click="showModal">모달 열기</button>
    <ModalComponent :visible="isModalVisible" @close="hideModal">
      <h2>이 모달을 당장 닫지 않으면!?</h2>
      <p>씨끄러울 겁니다!</p>
      <img
        src="https://jjalbang.today/files/jjalbox/2022/03/20220317_6232f240083c1.gif"
        alt="장동민마멋"
      />
    </ModalComponent>
  </div>
</template>

<script>
export default {
  components: {
    ModalComponent,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
button {
  margin-top: 20px;
}
</style>
