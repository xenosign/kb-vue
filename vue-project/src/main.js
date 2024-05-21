import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';

const emitter = mitt();
emitter.on('*', (type, e) => console.log(`## 이벤트로그: ${type} ->`, e));

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
