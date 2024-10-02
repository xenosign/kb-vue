<template>
  <div>
    <p v-if="loading">카카오 로그인 처리 중...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>로그인 성공! 리다이렉트 중...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const code = route.query.code;
    if (!code) {
      throw new Error('인증 코드가 없습니다.');
    }

    // 로그인 성공 후 홈페이지로 리다이렉트
    router.push('/counter');
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});
</script>
