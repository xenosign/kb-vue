<template>
  <div class="container d-flex justify-content-center align-items-center vh-95">
    <div class="row justify-content-center">
      <div class="col-md-3" v-for="(member, index) in members" :key="index">
        <router-link :to="member.src">
          <div class="card mx-3">
            <img
              :src="member.image"
              class="card-img-top rounded"
              @mouseover="hoverEffect = true"
              @mouseleave="hoverEffect = false"
            />
            <div class="card-body text-center">
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text">{{ member.description }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const members = [
  {
    name: '최현수',
    description: '오죠사마',
    image:
      'https://i.namu.wiki/i/7saHRlH_KjVEOEMwky9mR_mTpdz-u1GUy7jRuwDFmS2kEVJTfoMEOy7X-ciLCrzOqGXdu-TlgaJO_TVMOgXHLg.webp',
    src: '/About',
  },
  {
    name: '공연정',
    description: '죠스바 어떠신가요',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuk3ZBXCnJlf_227_B4Fb6l2XWrUAPZdzd-Q&s',
    src: '/Gong',
  },
  {
    name: '최민준',
    description: '사먹지 않겠다구요?',
    image: `https://i.namu.wiki/i/NUzo8Y8CQrxIjuZF9SlDK1ciyYMegj3PRFRi4x6qd6ll4C-jY3BEk4sPPACnrYCwWvbIZDYM49XSqT6gkBaNmg.webp`,
    src: '/Choi',
  },
  {
    name: '이태웅',
    description: '마음대로 하세요~',
    image:
      'data:image/png;base64,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',
    src: 'Moon',
  },
];
</script>

<style scoped>
.card {
  height: 400px;
  overflow: hidden;
}

.container {
  margin-top: 20px;
}

.card-img-top {
  width: 100%;
  aspect-ratio: 1/1;
  height: auto;
  object-fit: contain;
  object-position: center;
}

.vh-95 {
  height: 95vh;
}
.card-img-top {
  transition: transform 0.3s ease-in-out;
}

.card-img-top:hover {
  transform: scale(1.1);
}
.router-link-exact-active {
  text-decoration: none;
}
</style>
