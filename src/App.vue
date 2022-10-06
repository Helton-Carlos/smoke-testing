<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <HelloWorld msg="Vite + Vue" />
</template>