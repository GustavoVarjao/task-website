import { ofetch } from 'ofetch'
import type { PatchTaskObject, PostTaskObject } from '../models/TaskObject'
import { urlBuilder } from '../utils/urlBuilder'

export const taskRequest = async (
  method: string, taskBody?: PatchTaskObject | PostTaskObject, id?: string
) => {
  const url = urlBuilder(method, id)

  return await ofetch(url, {
    method,
    body: taskBody ? taskBody : null
  })
}