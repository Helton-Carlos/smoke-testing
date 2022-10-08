<script setup lang="ts">
import STnav from './components/STnav.vue';
</script>

<template>
  <STnav />
  <div class="w-4/5 mx-auto">
    <router-view />
  </div>
</template>