<template>
  <div>
    <nav>
      <router-link to="/">홈페이지</router-link>
      &nbsp;
      <router-link to="/about">라우터란?</router-link>
      &nbsp;
      <router-link to="/dynamic/happy">행복</router-link>
      &nbsp;
      <router-link to="/dynamic/exciting">씐난다</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>
