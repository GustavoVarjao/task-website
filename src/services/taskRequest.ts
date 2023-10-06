import { ofetch } from 'ofetch'
import type { RequestData } from '../models/RequestData'
import type { GetTaskObject } from '../models/TaskObject'
import { TASK_API_BASE_URL, urlModifier } from '../utils/urlModifier'
import { taskData } from '../App.vue'
import { format } from 'date-fns';

export const taskRequest = async ({
  method,
  taskBody,
  id
}: RequestData
) => {

  if (method === 'POST') {
    await ofetch(TASK_API_BASE_URL, {
      method,
      body: {
        ...taskBody,
        createdAt: format(new Date(), 'dd/MM/yyyy')
      }
    })
  }

  if (method === 'PATCH') {
    await ofetch(urlModifier(id, true), {
      method,
      body: {
        completedAt: format(new Date(), 'dd/MM/yyyy')
      }
    })
  }

  if (method === 'DELETE') {
    await ofetch(urlModifier(id), {
      method
    })
  }

  if (method === 'PUT') {
    await ofetch(urlModifier(id), {
      method,
      body: {
        ...taskBody,
        updatedAt: format(new Date(), 'dd/MM/yyyy')
      }
    })
  }

  taskData.value = (await ofetch(TASK_API_BASE_URL)).map((task: GetTaskObject) => {
    return {
      ...task,
      isEditing: false,
    }
  })
}