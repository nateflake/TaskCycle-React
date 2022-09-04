import { FaUndoAlt } from 'react-icons/fa';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, SetStateAction, useState } from "react";
import { TaskModel } from "../../app/models/taskModel";
import { itemTextWithLeadIcon, singleTaskLeadIcon, singleTaskShell } from '../../app/layout/styles';
import { MdOutlineShortText } from 'react-icons/md';

interface Props {
  text: string | undefined
  setText: Dispatch<SetStateAction<string | undefined>>
  task?: TaskModel | undefined
  updateTask?: (task: TaskModel) => void
}

export default function Text({ text, setText, task, updateTask }: Props) {

  const [viewTextField, setViewTextField] = useState(false)
  const toggleTextField = () => { setViewTextField(!viewTextField); }
  const handleTextCancel = () => { if (task) setText(task.text); toggleTextField(); }

  const updateText = () => {
    if (task) { task.text = text!; updateTask!(task); }
    setText(text)
  }
  const handleTextBlur = (target: any) => {
    if (!target) updateText();
    else if (target.id === `textCancel`) handleTextCancel();
    toggleTextField();
  }

  return (
    <Box sx={singleTaskShell}>

      {(!viewTextField) ?
        <Box className={'singleTask'}>
          <span style={itemTextWithLeadIcon}>
            <MdOutlineShortText style={singleTaskLeadIcon} />
            <span className={'singleText'} onClick={() => toggleTextField()}>
              {text}
            </span>
          </span>
        </Box>
        :
        <Box className={'singleTask'} >
          <div className='form-control'>
            <TextField label="Description" variant="outlined" fullWidth autoFocus
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={(e) => handleTextBlur(e.relatedTarget)}
              InputProps={
                (!task) ? undefined :
                  {
                    endAdornment: (
                      <FaUndoAlt id='textCancel' tabIndex={1} onClick={() => handleTextCancel()} />
                    ),
                  }}
            />
          </div>
        </Box>
      }
    </Box >
  );
}