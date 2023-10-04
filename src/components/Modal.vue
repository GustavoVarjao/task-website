<script setup lang="ts">
import { reactive, ref } from 'vue'
import { taskRequest } from '../services/taskRequest'
import { format } from 'date-fns';
import { PostTaskObject } from '../models/TaskObject';


const emit = defineEmits(['closeModal', 'reloadTask']);

const closeModal = () => {
  emit('closeModal')
  alertBoolean.value = false
}

const postBody = reactive<PostTaskObject>(
  {
    title: '',
    description: '',
    createdAt: format(new Date(), 'dd/MM/yyyy')
  }
)

const alertBoolean = ref(false)

const postTask = async () => {
  if (postBody.title === '' && postBody.description === '') {
    alertBoolean.value = true
    return
  }

  await taskRequest('POST', postBody)

  emit('reloadTask')

  postBody.title = ''
  postBody.description = ''

  closeModal()
}

</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 grid place-content-center z-10">
    <div class="w-128 h-112 rounded-lg bg-dark-gray text-center">
      <h1 class=" font-bold text-white text-3xl m-5">
        CRIAR TAREFA
      </h1>
      <form method="post" @submit.prevent="postTask" @keydown.enter.prevent>
        <input v-model="postBody.title" type="text" placeholder="nome"
          class="bg-gray rounded-full w-3/4 h-10 p-1 pl-4 focus:outline-none text-white mt-5">
        <textarea v-model="postBody.description" rows="6" cols="50" placeholder="descrição"
          class="bg-gray rounded-3xl w-3/4 p-1 pl-4 focus:outline-none text-white mt-5 resize-none pt-3"></textarea>
        <p v-show="alertBoolean" class="text-red text-lg">OS DOIS CAMPOS SÃO OBRIGATÓRIOS</p>
        <div class="flex justify-between w-3/4 h-10 mx-auto my-10">
          <button type="button" @click="closeModal()"
            class="bg-light-gray rounded-lg text-white w-40 text-2xl">CANCELAR</button>
          <button type="submit" class="bg-green rounded-lg text-white w-40 text-2xl">CRIAR</button>
        </div>
      </form>
    </div>
  </div>
</template>