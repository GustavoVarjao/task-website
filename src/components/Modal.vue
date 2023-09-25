<script setup lang="ts">
import { reactive } from 'vue'
import { taskRequest } from '../services/taskRequest'


const emit = defineEmits(['closeModal', 'reloadTask']);

const closeModal = () => {
  emit('closeModal')
}

const postBody = reactive(
  {
    title: '',
    description: '',
    createdAt: '24/04/2012'
  }
)

const sendTask = async () => {
  await taskRequest('POST', postBody)

  emit('reloadTask')

  postBody.title = ''
  postBody.description = ''

  closeModal()
}

</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 grid place-content-center z-10">
    <div class="w-128 h-112 rounded-lg bg-light-gray text-center">
      <h1 class=" font-bold text-white text-3xl m-5">
        CRIAR TAREFA
      </h1>
      <form method="post" @submit.prevent="sendTask" @keydown.enter.prevent>
        <input v-model="postBody.title" type="text" placeholder="nome"
          class="bg-lighter-gray rounded-full w-3/4 h-10 p-1 pl-4 focus:outline-none text-white mt-5">
        <textarea v-model="postBody.description" rows="6" cols="50" placeholder="descrição"
          class="bg-lighter-gray rounded-3xl w-3/4 p-1 pl-4 focus:outline-none text-white mt-5 resize-none pt-3"></textarea>
        <div class="flex justify-between w-3/4 h-10 mx-auto my-10">
          <button type="button" @click="closeModal()"
            class="bg-lightest-gray rounded-lg text-white w-40 text-2xl">CANCELAR</button>
          <button type="submit" class="bg-green rounded-lg text-white w-40 text-2xl">CRIAR</button>
        </div>
      </form>
    </div>
  </div>
</template>