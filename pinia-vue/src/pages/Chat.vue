<template>
  <div class="chat-container">
    <h2>Chat Room</h2>

    <div v-for="message in messages" :key="message.id" class="message">
      <strong>{{ message.sender }}:</strong> {{ message.content }}
    </div>

    <div class="input-container">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
        :disabled="!isConnected"
      />
      <button @click="sendMessage" :disabled="!isConnected">Send</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';

function connect() {
  const socket = new SockJS('http://localhost:8080/ws');
  const stompClient = Stomp.over(socket);
  stompClient.connect(
    {},
    function (frame) {
      console.log('Connected: ' + frame);
      stompClient.subscribe('/topic/messages', function (message) {
        showMessage(JSON.parse(message.body));
      });
    },
    function (error) {
      console.log('STOMP error ' + error);
      setTimeout(connect, 5000);
    }
  );
}

onMounted(() => {
  connect();
});

onUnmounted(() => {});
</script>

<style scoped>
/* 스타일은 이전과 동일 */
</style>
