import { ofetch } from 'ofetch'
import type { SendTaskObject } from '../models/TaskObject'

export const taskRequest = async (method: string, taskBody?: SendTaskObject) => {
  return await ofetch('http://localhost:3333/tasks', {
    method,
    body: taskBody ? taskBody : null
  })
}