<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
import Modal from './components/Modal.vue'
import Tasks from './components/Tasks.vue'
import { ref, onMounted } from 'vue'
import { GetTaskObject } from './models/TaskObject';
import { taskRequest } from './services/taskRequest';

const taskData = ref<GetTaskObject[]>([])

const loadTaskData = async () => {
  taskData.value = await taskRequest('GET')
}

onMounted(async () => {
  taskData.value = await taskRequest('GET')
})

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
    <Tasks :taskData="taskData" @reloadTask="loadTaskData" />
    <Modal v-show="bool" @closeModal="modalSwitch" @reloadTask="loadTaskData" />
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