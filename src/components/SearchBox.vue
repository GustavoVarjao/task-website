<script setup lang="ts">
import { ref } from 'vue'
import { taskRequest } from '../services/taskRequest';

const searchTerm = ref('');
</script>

<template>
  <div class="flex justify-center">
    <input v-model="searchTerm" type="text" placeholder="procurar tarefas"
      class="bg-dark-gray rounded-l-full w-1/3 h-10 p-1 pl-4 focus:outline-none text-white" />
    <button @click="taskRequest({
      method: 'GET',
      searchTerm,
    })" class="text-center bg-dark-gray w-10 h-10 rounded-r-full">
      <img src="../assets/img/search.png" class="w-6 h-6" />
    </button>
  </div>
</template>