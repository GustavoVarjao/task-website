export interface PostTaskObject {
  title: string;
  description: string;
  createdAt: string;
}

export interface PatchTaskObject {
  completedAt: string;
}

export interface GetTaskObject extends PostTaskObject, PatchTaskObject {
  updatedAt: string;
  id: string;
}

