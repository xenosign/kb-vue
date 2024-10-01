import { createApp } from 'vue';
import { createPinia } from 'pinia';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mixin({
  mounted() {
    AOS.init({
      // AOS 옵션을 여기에 추가할 수 있습니다
      duration: 800,
      once: true,
    });
  },
  updated() {
    AOS.refresh();
  },
});

app.mount('#app');
