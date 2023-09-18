export interface SendTaskObject {
  title: string;
  description: string;
}

export interface GetTaskObject extends SendTaskObject {
  createdAt: string;
  updatedAt: string;
  completedAt: string;
  id: string;
}

