<template>
  <div>
    <h1>Kakao</h1>
    <a :href="KAKAO_AUTH_URL">
      <img src="@/assets/kakao_login.png" />
    </a>
  </div>
</template>

<script setup>
const KAKAO_CLIENT_ID = '043c443064dbd3c5b25caf500122a5f8';
const KAKAO_REDIRECT_URI = 'http://localhost:5173/oauth/kakao';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
</script>
