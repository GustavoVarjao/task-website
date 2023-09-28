const URL = 'http://localhost:3333/tasks'

export const urlBuilder = (method: string, id?: string): string => {
  if (method === 'GET') {
    return URL
  }
  if (method === 'DELETE') {
    return URL + `/${id}`
  }
  if (method === 'PATCH') {
    return URL + `/${id}/complete`
  }
  return URL
}