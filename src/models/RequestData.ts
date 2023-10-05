import { PostFormObject } from "./TaskObject";

export interface RequestData {
  method: string;
  id?: string;
  taskBody?: PostFormObject;
}