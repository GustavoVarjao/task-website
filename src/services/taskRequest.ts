import { ofetch } from 'ofetch'
import type { PatchTaskObject, PostTaskObject } from '../models/TaskObject'
import { urlModifier } from '../utils/urlModifier'

export const taskRequest = async (
  method: string, taskBody?: PatchTaskObject | PostTaskObject, id?: string
) => {
  const url = urlModifier(method, id)

  return await ofetch(url, {
    method,
    body: taskBody ? taskBody : null
  })
}