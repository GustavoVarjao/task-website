<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ofetch } from 'ofetch'

let data = ref();

onMounted(async () => {
  data.value = await ofetch('http://localhost:3333/tasks')
})

</script>

<template>
  <ul class="grid place-content-center w-screen h-auto py-5">
    <li v-for="{ title, description, createdAt, updatedAt, completedAt } in data"
      class="bg-light-gray w-160 h-auto rounded my-5">
      <div class="flex place-content-between w-160 p-4">
        <h2 class="text-white font-bold text-2xl h-7 ">{{ title }}</h2>
        <div class="flex space-x-1">
          <button>
            <img src="../assets/img/edit.png" class="w-7 h-7 rounded" />
          </button>
          <button>
            <img src="../assets/img/complete.png" class="w-7 h-7 rounded" />
          </button>
          <button>
            <img src="../assets/img/delete.png" class="w-7 h-7 rounded" />
          </button>
        </div>
      </div>

      <div class="bg-lighter-gray m-4 px-4 py-2 text-white rounded">
        {{ description }}
      </div>

      <div class="flex place-content-between p-4">
        <p class="text-green">criada dia: {{ createdAt }}</p>
        <p v-if="updatedAt" class="text-green">editada dia: {{ updatedAt }}</p>
        <p v-if="completedAt" class="text-green">completada dia: {{ completedAt }}</p>
      </div>
    </li>
  </ul>
</template>