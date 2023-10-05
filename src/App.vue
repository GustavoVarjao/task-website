<script lang="ts">
export const taskData = ref([])
</script>

<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
import Modal from './components/Modal.vue'
import Tasks from './components/Tasks.vue'
import { ref, onMounted } from 'vue'
import { taskRequest } from './services/taskRequest'

onMounted(() => {
  taskRequest({ method: 'GET' })
})

const isOpen = ref(false)

const modalSwitch = () => {
  isOpen.value = isOpen.value ? false : true
}
</script>

<template>
  <div>
    <div class="border-b border-green p-4 text-center">
      <SearchBox />
    </div>
    <Tasks :taskData="taskData" />
    <Modal v-show="isOpen" @closeModal="modalSwitch" />
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