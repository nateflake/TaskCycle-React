import { TaskModel } from "../models/taskModel";

export function presetTaskList(newTask: TaskModel, prevState: TaskModel[] | undefined) {
  if (!prevState) return
  return [...prevState, {
    id: prevState.length + 1,
    title: newTask.title,
    text: newTask.text,
    dueDate: new Date(newTask.dueDate),
    dueTime: newTask.dueTime,
    bellType: newTask.bellType,
    bellTime: newTask.bellTime,
    flag: newTask.flag,
    done: newTask.done,
    drop: newTask.drop
  },]
}