<script setup></script>
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/login">Login</router-link>
      &nbsp;
      <router-link to="/todo">Todo</router-link>
    </nav>
    <router-view />
  </div>
</template>
