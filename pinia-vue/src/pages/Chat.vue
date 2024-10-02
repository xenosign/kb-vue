<template>
  <div class="chat-container">
    <h2>Chat Room</h2>
    <div v-if="isConnected" class="message-container">
      <div v-for="message in messages" :key="message.id" class="message">
        <strong>{{ message.sender }}:</strong> {{ message.content }}
      </div>
    </div>
    <div v-else class="connecting-message">Connecting to chat...</div>
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

const stompClient = ref(null);
const isConnected = ref(false);
const messages = ref([]);
const newMessage = ref('');
const username = ref('User' + Math.floor(Math.random() * 1000));

const connectToWebSocket = () => {
  const socket = new SockJS('http://localhost:8080/ws');
  stompClient.value = Stomp.over(socket);

  stompClient.value.connect(
    {},
    (frame) => {
      isConnected.value = true;
      console.log('Connected: ' + frame);
      stompClient.value.subscribe('/topic/messages', onMessageReceived);
    },
    (error) => {
      console.log('Error: ' + error);
      isConnected.value = false;
    }
  );
};

const onMessageReceived = (payload) => {
  const message = JSON.parse(payload.body);
  messages.value.push(message);
};

const sendMessage = () => {
  if (newMessage.value && stompClient.value) {
    const message = {
      sender: username.value,
      content: newMessage.value,
    };
    stompClient.value.send('/app/chat', JSON.stringify(message), {});
    newMessage.value = '';
  }
};

onMounted(() => {
  connectToWebSocket();
});

onUnmounted(() => {
  if (stompClient.value) {
    stompClient.value.disconnect();
  }
});
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.message-container {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 5px;
}

.input-container {
  display: flex;
}

input {
  flex-grow: 1;
  padding: 5px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
}

.connecting-message {
  color: #666;
  font-style: italic;
}
</style>
