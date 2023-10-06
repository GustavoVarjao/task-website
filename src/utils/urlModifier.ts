export const TASK_API_BASE_URL = 'http://localhost:3333/tasks';

export const urlModifier = (id?: string, patch?: boolean): string => {
  let modfiedUrl = TASK_API_BASE_URL + `/${id}`;

  if (patch) {
    return modfiedUrl + '/complete';
  }

  return modfiedUrl
};
