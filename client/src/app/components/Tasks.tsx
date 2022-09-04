import { List } from "@mui/material";
import { TaskModel } from "../models/taskModel";
import Task from "./Task";

interface Props {
  tasks: TaskModel[]
  updateDone: (task: TaskModel) => void
  updateFlag: (task: TaskModel) => void
  updateDrop: (task: TaskModel) => void
}

export default function Tasks({ tasks, updateDone, updateFlag, updateDrop }: Props) {

  return (
    <>
      <List style={{ justifyContent: 'center' }}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            updateDone={updateDone}
            updateFlag={updateFlag}
            updateDrop={updateDrop}
          />
        ))}
      </List>
    </>
  );
}