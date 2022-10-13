<script setup lang="ts">
import STinput from '../components/STinput/STinput.vue';
import STcard from '../components/STcard/STcard.vue';

function buscar(result: string) {
  console.log(result);
}

const produto = ([
  { produto: "Camisa Adidas", color: "Black", preco: 55.99 },
  { produto: "Camisa Nike", color: "Black", preco: 77.99 }
]);
</script>

<template>
  <div>
    <STinput @pesquisar="buscar" />
    <div class="my-4">
      <STcard :produtos="produto"/>
    </div>
  </div>
</template>