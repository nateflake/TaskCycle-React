import { FaUndoAlt } from 'react-icons/fa';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { singleTaskShell } from "../../app/layout/styles";
import { TaskModel } from "../../app/models/taskModel";

interface Props {
  title: string | undefined
  setTitle: Dispatch<SetStateAction<string | undefined>>
  task?: TaskModel | undefined
  updateTask?: (task: TaskModel) => void
}

export default function Title({ title, setTitle, task, updateTask }: Props) {

  const [viewTitleField, setViewTitleField] = useState(false)

  const handleTitleCancel = () => { if (task) setTitle(task.title); toggleTitleField(); }

  const updateTitle = () => {
    if (task) { task.title = title!; updateTask!(task); }
    setTitle(title);
  }

  const handleTitleBlur = (target: any) => {
    if (!target) updateTitle();
    else if (target.id === `titleCancel`) handleTitleCancel();
    toggleTitleField();
  }
  const toggleTitleField = () => { setViewTitleField(!viewTitleField); }

  return (
    <Box sx={singleTaskShell}>

      {!viewTitleField ?
        <Box className={'singleTask'} >
          <span className={'singleTitle'} onClick={() => toggleTitleField()}>
            {title}
          </span>
        </Box>
        :
        <Box className={'singleTask'} >
          <div className='form-control'>
            <TextField label="Title" variant="outlined" fullWidth autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={(e) => handleTitleBlur(e.relatedTarget)}
              InputProps={
                (!task) ? undefined :
                  {
                    endAdornment: (
                      <FaUndoAlt id='titleCancel' tabIndex={0} onClick={() => handleTitleCancel()} />
                    ),
                  }}
            />
          </div>
        </Box>
      }
    </Box>
  );
}