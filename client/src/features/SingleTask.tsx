import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { amPms, dbUrl, hours, minutes, show, singleTaskModes } from "../app/constants/constants";
import { outerMostContainer } from "../app/layout/styles";
import { TaskModel } from "../app/models/taskModel";
import Title from "./SingleTaskComponents/Title";
import Text from "./SingleTaskComponents/Text";
import DueDate from "./SingleTaskComponents/DueDate";
import DueTime from "./SingleTaskComponents/DueTime";
import DueDateDescription from "./SingleTaskComponents/DueDateDescription";
import TaskStatusButtonRow from "./SingleTaskComponents/TaskStatusButtonRow";
import { destroyTask, updateTask } from "../app/util/singleTaskManagement";
import { goBack } from "../app/util/util";
import DueBell from "./SingleTaskComponents/DueBell";
import TaskDoneButtonRow from "./SingleTaskComponents/TaskDoneButtonRow";


interface Props {
  setView: (view: string) => void
}

export default function SingleTask({ setView }: Props) {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<TaskModel>();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${dbUrl}/Tasks/${id}`)
      .then(response => response.json())
      .then(data => {
        setTask(data)
        setTitle(data.title)
        setText(data.text)
        setDueDate(data.dueDate)
        setDueTime(data.dueTime)
        setSingleDone(data.done)
        setSingleFlag(data.flag)
        setBellType(data.bellType)
        setBellTime(data.bellTime)
        setDrop(data.drop)
      })
  }, [id])

  const [title, setTitle] = useState<string | undefined>('')
  const [text, setText] = useState<string | undefined>('')
  const [dueDate, setDueDate] = useState<Date>()
  const [dueTime, setDueTime] = useState<string | undefined>(`${hours.none}:${minutes.none} ${amPms.none}`)//('--:-- --')
  const [singleDone, setSingleDone] = useState<boolean>()
  const [singleFlag, setSingleFlag] = useState<boolean>()
  const [drop, setDrop] = useState<boolean>()
  const [bellType, setBellType] = useState<string>()
  const [bellTime, setBellTime] = useState<string>()

  const [viewDueDateField, setViewDueDateField] = useState(false)
  const [viewDueTimeField, setViewDueTimeField] = useState(false)

  const updateDone = () => { if (task) { setSingleDone(!singleDone); task.done = !singleDone!; updateTask(task); } }
  const updateFlag = () => { if (task) { setSingleFlag(!singleFlag); task.flag = !singleFlag!; updateTask(task); } }
  const updateBell = (newBellType: string | undefined, newBellTime: string | undefined) => {
    if (task) {
      setBellType(newBellType); setBellTime(newBellTime);
      task.bellType = newBellType; task.bellTime = newBellTime;
      updateTask(task);
    }
  }
  const updateDueTime = (newTime: string | undefined) => { if (task) { task.dueTime = newTime!; updateTask(task); } }

  const updateDate = (newDate: any) => { setDueDate(newDate); if (task) { task.dueDate = newDate!; updateTask(task); } }

  return (
    <>
      <Container sx={outerMostContainer} disableGutters>

        <Title
          title={title} setTitle={setTitle}
          task={task} updateTask={updateTask}
        />

        <Text
          text={text} setText={setText}
          task={task} updateTask={updateTask}
        />

        <DueDate
          dueDate={dueDate} setDueDate={setDueDate}
          task={task}
          viewDueDateField={viewDueDateField} setViewDueDateField={setViewDueDateField}
          updateDate={updateDate}
        />

        <DueTime
          viewDueTimeField={viewDueTimeField} setViewDueTimeField={setViewDueTimeField}
          dueTime={dueTime} setDueTime={setDueTime}
          updateDueTime={updateDueTime}
          task={task}
          focusOnField={true}
        />

        <DueBell
          bellType={bellType} setBellType={setBellType} bellTime={bellTime} setBellTime={setBellTime}
          updateBell={updateBell}
          task={task}
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
        task={task}
        drop={drop} setDrop={setDrop}
        setView={setView}
        navigate={navigate}
        addOrEdit={singleTaskModes.edit}
        destroyTask={destroyTask}
        btnText={'done'}
      />
    </>
  );
}