<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
import Modal from './components/Modal.vue'
import { ref } from 'vue'

const bool = ref(false)

const modalSwitch = () => {
  bool.value = bool.value ? false : true
}


</script>

<template>
  <div class="bg-gray w-screen h-screen">
    <div class="border-b border-green p-4 text-center">
      <SearchBox />
    </div>
    <Modal v-show="bool" @switch="modalSwitch" />
    <button class="fixed bottom-5 right-5 bg-green w-20 h-20 rounded-full grid place-content-center text-8xl text-white"
      @click="modalSwitch()">+</button>
  </div>
</template>
