export type TaskStatus = 'active' | 'completed' | 'deleted';

export interface Task {
  id: number;
  text: string;
  status: TaskStatus;
}
