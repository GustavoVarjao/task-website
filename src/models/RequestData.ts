import { PostFormObject } from "./TaskObject";

export interface UrlData {
  id?: string;
  searchTerm?: string;
}

export interface RequestData extends UrlData {
  method: string;
  taskBody?: PostFormObject;
}