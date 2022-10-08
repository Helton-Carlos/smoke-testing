<script setup lang="ts">
import { ref } from 'vue';

interface routes {
  router: string,
  name: string
}

const routes = ref<routes[]>([
  { router: "/", name: "Home" },
  { router: "/about", name: "About" }
]);

</script>
  
<template>
  <div class="bg-sky-700 text-white py-4">
    <div class="w-4/5 flex justify-between wx mx-auto">
      <div>
        <h1>Smoke testing</h1>
      </div>
      <div>
        <router-link v-for="route in routes" :key="route.router" :to="route.router" class="px-2 hover:text-cyan-200" data-testid="routes">{{route.name}}</router-link>
      </div>
    </div>
  </div>
</template>