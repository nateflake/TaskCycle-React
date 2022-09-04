export interface TaskModel {
  id: number;
  title: string | undefined;
  text?: string;
  dueDate: Date;
  dueTime: string | undefined;
  bellType: string | undefined;
  bellTime: string | undefined;
  flag: boolean;
  done: boolean;
  drop: boolean;
}