import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { singleTaskButton, singleTaskShell } from "../../app/layout/styles";
import { updateTask } from '../../app/util/singleTaskManagement';
import { TaskModel } from '../../app/models/taskModel';
import { show, singleTaskModes } from '../../app/constants/constants';
import { NavigateFunction } from 'react-router-dom';
import { goBack } from '../../app/util/util';
import { Dispatch, SetStateAction } from 'react';
import { TiTimes } from "react-icons/ti";
import { TbTrash } from "react-icons/tb";
import { MdOutlineUnarchive } from "react-icons/md";

interface Props {
  task?: TaskModel
  drop?: boolean | undefined
  setDrop?: Dispatch<SetStateAction<boolean | undefined>>
  setView: (showType: string) => void
  navigate?: NavigateFunction | undefined
  addOrEdit: string | undefined
  destroyTask?: (taskToDelete: TaskModel | undefined) => void
  addTask?: (e: any) => void
  btnText: string | undefined
}

export default function TaskDoneButtonRow({ task, drop, setDrop, setView, navigate, addOrEdit, destroyTask, addTask, btnText }: Props) {

  const handleSubmit = (e: any) => {
    if (addOrEdit === singleTaskModes.add) { addTask!(e); return; }
    goBack(setView, show.tasks, navigate)
  }

  const updateDrop = (dropOrNot: boolean) => {
    setDrop!(dropOrNot)
    if (!task) return
    task.drop = dropOrNot
    updateTask(task)
  }

  const dropTask = () => {
    goBack(setView, show.tasks, navigate)
    updateDrop(true)
  }

  const destroy = () => {
    goBack(setView, show.tasks, navigate)
    if (task) destroyTask!(task)
  }

  const handleRestore = () => { updateDrop(false) }
  const handleCancelNewTask = () => {
    goBack(setView, show.tasks, navigate)
  }

  const handleDrop = () => { window.confirm('Are you sure you want to archive this task?',) && dropTask() }
  const handleDestroy = () => { window.confirm('Are you sure you want to PERMANENTLY delete this task?',) && destroy() }

  return (
    <Box sx={singleTaskShell}>
      <Box className={'singleTask'}>


        <Box sx={{ display: 'inline-block', margin: 0, width: '100px' }}>
          {
            (addOrEdit === singleTaskModes.edit) ?
              drop ?
                <>
                  <IconButton
                    onClick={() => handleRestore()}
                    sx={singleTaskButton}>
                    <MdOutlineUnarchive />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDestroy()}
                    sx={singleTaskButton}>
                    <TbTrash />
                  </IconButton>
                </>
                :
                <IconButton onClick={() => handleDrop()} sx={singleTaskButton}><TiTimes /></IconButton>
              :

              (addOrEdit === singleTaskModes.add) &&
              <IconButton onClick={() => handleCancelNewTask()} sx={singleTaskButton}><TiTimes /></IconButton>
          }
        </Box>

        <input type='submit' value={btnText} className='btn btn-max' onClick={(e) => handleSubmit(e)} />
      </Box>
    </Box>

  );
}