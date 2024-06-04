<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/counter">Counter</router-link>
      &nbsp;
      <router-link to="/todo">Todo</router-link>
      &nbsp;
      <router-link to="/todolist">TodoList</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup></script>
