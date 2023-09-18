<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
import Modal from './components/Modal.vue'
import Tasks from './components/Tasks.vue'
import { ref } from 'vue'

const bool = ref(false)

const modalSwitch = () => {
  bool.value = bool.value ? false : true
}


</script>

<template>
  <div>
    <div class="border-b border-green p-4 text-center">
      <SearchBox />
    </div>
    <Tasks />
    <Modal v-show="bool" @closeModal="modalSwitch" />
    <button class="fixed bottom-5 right-5 bg-green w-20 h-20 rounded-full grid place-content-center text-8xl text-white"
      @click="modalSwitch()">+</button>
  </div>
</template>

<style>
html {
  overflow-x: hidden;
}

body {
  background-color: #222;
}
</style>