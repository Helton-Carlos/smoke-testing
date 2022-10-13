<script setup lang="ts">
import { ref } from 'vue';

const inputs = ref<string>("");
</script>

<template>
  <div class="my-4 flex">
    <input type="text" id="first_name"
      class="block w-full px-4 py-1 text-indico-700 bg-white border rounded-md focus:border-indico-400 focus:ring-indico-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Estou procurando?" v-model="inputs" @keyup.enter="$emit('pesquisar', inputs)" required>
   
    <button class="mx-2 bg-transparent hover:bg-sky-700 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-700 hover:border-transparent rounded" @click="$emit('pesquisar', inputs)">Buscar</button>
  </div>
</template>