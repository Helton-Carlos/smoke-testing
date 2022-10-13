<script setup lang="ts">
import STinput from '../components/STinput/STinput.vue';
import STcard from '../components/STcard/STcard.vue';

function buscar(result: string) {
  console.log(result);
}
</script>

<template>
  <div>
    <STinput @pesquisar="buscar" />
    <div class="my-4">
      <STcard />
    </div>
  </div>
</template>