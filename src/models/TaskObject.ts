export interface PostFormObject {
  title: string;
  description: string;
}

export interface GetTaskObject extends PostFormObject {
  createdAt: string;
  updatedAt: string;
  completedAt: string;
  id: string;
  isEditing: boolean;
}

