import { ofetch } from 'ofetch'
import type { SendTaskObject } from '../models/TaskObject'
import { urlBuilder } from '../utils/urlBuilder'

export const taskRequest = async (method: string, taskBody?: SendTaskObject, id?: string) => {
  const url = urlBuilder(method, id)

  return await ofetch(url, {
    method,
    body: taskBody ? taskBody : null
  })
}