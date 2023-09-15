<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
</script>

<template>
  <div class="border-b border-green p-4 text-center">
    <SearchBox />
  </div>
  <button
    class="fixed bottom-5 right-5 bg-green w-20 h-20 rounded-full grid place-content-center text-8xl text-white">+</button>
</template>
