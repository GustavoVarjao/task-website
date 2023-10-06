<script setup lang="ts">
import { taskRequest } from '../services/taskRequest';
import { reactive } from 'vue'
import type { GetTaskObject } from '../models/TaskObject';
import { taskData } from '../App.vue';

const props = defineProps<{
  taskData: GetTaskObject[]
}>()

const taskEditedData = reactive({
  title: '',
  description: '',
  isEditModeOn: false
})

const openEditMode = (index: number) => {
  if (taskEditedData.isEditModeOn) {
    return
  }

  const { title, description } = props.taskData[index];

  Object.assign(taskEditedData, {
    title,
    description,
    isEditModeOn: true,
  })

  props.taskData[index].isEditing = true;
}

const closeEditMode = (index: number) => {
  taskEditedData.isEditModeOn = false;

  props.taskData[index].isEditing = false;
}

const sendEditedTask = async (index: number, id: string) => {
  const { title, description } = taskEditedData
  if (title === '' && description === '') {
    return
  }

  await taskRequest({
    method: 'PUT', taskBody: {
      title,
      description
    },
    id
  })

  closeEditMode(index)
}

</script>

<template>
  <ul class="grid place-content-center w-screen h-auto py-5">
    <li v-for="(
      {
        title,
        description,
        createdAt,
        updatedAt,
        completedAt,
        id,
        isEditing,
      },
        index
    ) in  taskData " :key="index" class="bg-dark-gray w-160 h-auto rounded my-5">
      <div class="flex place-content-between w-160 p-4">
        <h2 v-if="!isEditing" class="text-white font-bold text-2xl h-7">
          {{ title }}
        </h2>
        <input v-else type="text" v-model="taskEditedData.title"
          class="text-lighter-gray font-bold text-2xl h-7 bg-dark-gray focus:outline-none pt-1" />
        <div class="flex space-x-1">
          <button>
            <img @click="openEditMode(index)" :src="`/src/assets/img/${isEditing ? 'editing' : 'edit'
              }.png`" class="w-7 h-7 rounded" />
          </button>
          <button @click="taskRequest({ method: 'PATCH', id })">
            <img :src="`/src/assets/img/${completedAt ? 'uncomplete' : 'complete'}.png`" class="w-7 h-7 rounded" />

          </button>
          <button @click="taskRequest({ method: 'DELETE', id })">
            <img src="../assets/img/delete.png" class="w-7 h-7 rounded" />
          </button>
        </div>
      </div>
      <div class="bg-gray m-4 px-4 py-2 rounded">
        <div v-if="!isEditing" class="text-white">
          {{ description }}
        </div>
        <textarea v-else v-model="taskEditedData.description" type="text"
          class="w-full text-lighter-gray rounded resize-none focus:outline-none bg-gray" rows="4" cols="50"></textarea>
      </div>
      <div v-if="!isEditing" class="flex place-content-between p-4">
        <p class="text-green">criada dia: {{ createdAt }}</p>
        <p v-if="updatedAt" class="text-green">editada dia: {{ updatedAt }}</p>
        <p v-if="completedAt" class="text-green">
          completada dia: {{ completedAt }}
        </p>
      </div>
      <div v-else class="flex justify-between mt-6 mb-4 mx-32">
        <button @click="closeEditMode(index)" class="bg-light-gray rounded-lg text-white w-40 text-2xl">CANCELAR</button>
        <button @click="sendEditedTask(index, id)" class="bg-green rounded-lg text-white w-40 text-2xl">ENVIAR</button>
      </div>
    </li>
  </ul>
</template>