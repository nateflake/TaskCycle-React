import { Container } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { amPms, bellTimes, bellTypes, hours, minutes, show, singleTaskModes } from "../app/constants/constants";
import { outerMostContainer } from "../app/layout/styles";
import { TaskModel } from "../app/models/taskModel";
import Title from "./SingleTaskComponents/Title";
import Text from "./SingleTaskComponents/Text";
import DueDate from "./SingleTaskComponents/DueDate";
import DueTime from "./SingleTaskComponents/DueTime";
import DueDateDescription from "./SingleTaskComponents/DueDateDescription";
import TaskStatusButtonRow from "./SingleTaskComponents/TaskStatusButtonRow";
import { createTask, updateTask } from "../app/util/singleTaskManagement";
import DueBell from "./SingleTaskComponents/DueBell";
import TaskDoneButtonRow from "./SingleTaskComponents/TaskDoneButtonRow";


interface Props {
  setView: (view: string) => void
}

export default function AddTaskPage({ setView }: Props) {

  const { id } = useParams<{ id: string }>();

  const [title, setTitle] = useState<string | undefined>('New Task')
  const [text, setText] = useState<string | undefined>('Example Description')
  const [dueDate, setDueDate] = useState<Date | undefined>(new Date())
  const [dueTime, setDueTime] = useState<string | undefined>(`${hours.none}:${minutes.none} ${amPms.none}`)//('--:-- --')
  const [singleDone, setSingleDone] = useState<boolean>(false)
  const [singleFlag, setSingleFlag] = useState<boolean>(false)
  const [singleBell, setSingleBell] = useState<boolean>(false)
  const [bellType, setBellType] = useState<string | undefined>(bellTypes.none)
  const [bellTime, setBellTime] = useState<string | undefined>(bellTimes.none)
  const [singleDrop, setSingleDrop] = useState<boolean>(false)

  const [viewDueDateField, setViewDueDateField] = useState(false)
  const [viewDueTimeField, setViewDueTimeField] = useState(false)

  const updateDone = () => { setSingleDone(!singleDone); }
  const updateFlag = () => { setSingleFlag(!singleFlag); }
  const updateBell = () => { setSingleBell(!singleBell); }

  const updateDate = (newDate: any) => { setDueDate(newDate); }

  const addTask = (e: any) => {

    const newTask: TaskModel = {
      id: 0,
      title: title!,
      text: text,
      dueDate: dueDate!,
      dueTime: dueTime!,
      bellType: bellType,
      bellTime: bellTime,
      flag: singleFlag,
      done: singleDone,
      drop: singleDrop
    }

    createTask(newTask)

    setView(show.tasks)
    e.preventDefault();
  }

  return (
    <>
      <Container sx={outerMostContainer} disableGutters>

        <Title
          title={title}
          setTitle={setTitle}
        />

        <Text
          text={text} setText={setText}
        />

        <DueDate
          dueDate={dueDate} setDueDate={setDueDate}
          viewDueDateField={viewDueDateField} setViewDueDateField={setViewDueDateField}
          updateDate={updateDate}
        />

        <DueTime
          viewDueTimeField={viewDueTimeField} setViewDueTimeField={setViewDueTimeField}
          dueTime={dueTime} setDueTime={setDueTime}
          focusOnField={true}
        />

        <DueBell
          bellType={bellType} setBellType={setBellType} bellTime={bellTime} setBellTime={setBellTime}
          updateBell={updateBell}
        />

        <DueDateDescription
          viewDueDateField={viewDueDateField} viewDueTimeField={viewDueTimeField}
          dueDate={dueDate}
        />

      </Container>

      <TaskStatusButtonRow
        singleDone={singleDone} updateDone={updateDone}
        singleFlag={singleFlag} updateFlag={updateFlag}
      />

      <TaskDoneButtonRow
        setView={setView}
        addOrEdit={singleTaskModes.add}
        btnText={'create'}
        addTask={addTask}
      />
    </>
  );
}