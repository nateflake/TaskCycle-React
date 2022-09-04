import { Box } from "@mui/system";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TaskModel } from "../../app/models/taskModel";
import { bellValIsPartial } from "../../app/util/singleTaskManagement";
import { darkest, itemTextWithLeadIcon, singleTaskLeadIcon, singleTaskShell } from "../../app/layout/styles";
import { NotificationsActive, NotificationsOff } from '@mui/icons-material';
import { FormControl, IconButton, MenuItem, Select } from '@mui/material';
import { FaUndoAlt } from 'react-icons/fa';
import { TiTimes } from 'react-icons/ti';
import { bellTimeList, bellTimes, bellTypeList, bellTypes } from "../../app/constants/constants";

interface Props {
  bellType: string | undefined
  setBellType: Dispatch<SetStateAction<string | undefined>>
  bellTime: string | undefined
  setBellTime: Dispatch<SetStateAction<string | undefined>>
  updateBell: (bellType: string | undefined, bellTime: string | undefined) => void
  task?: TaskModel | undefined
}

export default function DueBell({ bellType, setBellType, bellTime, setBellTime, updateBell, task }: Props) {

  const [viewBellField, setViewBellField] = useState(false)
  const [bellOn, setBellOn] = useState(false)
  useEffect(() => {
    if (bellType === bellTypes.none && bellTime === bellTimes.none) { setBellOn(false); return; }
    setBellOn(true)
  }, [bellType, bellTime])

  const toggleBellField = (isOpen: boolean) => { setViewBellField(isOpen); }
  const handleBellTypeSelect = (newType: string) => { setBellType(newType); }
  const handleBellTimeSelect = (newTime: string) => { setBellTime(newTime) }

  const handleBellCancel = () => { resetBell() }

  const clickedWithinForm = (id: string) => { return (id && (id === 'typeField' || id === 'timeField' || id === 'amPmField')) }

  const setFullBell = (type: string | undefined, time: string | undefined) => { setBellType(type); setBellTime(time) }

  const resetBell = () => { setFullBell(task?.bellType, task?.bellTime) }
  const clearBell = () => { setFullBell('--', '--') }

  const setAndUpdateBell = (type: string | undefined, time: string | undefined) => {
    setFullBell(type, time)
    updateBell(type, time)
  }

  const updateFullBellString = (type: string | undefined, time: string | undefined) => {
    if (bellValIsPartial(type, time)) { resetBell(); return; }
    setAndUpdateBell(type, time)
  }

  const handleBlur = (target: any) => {
    if (target?.id === 'bellClear') return;
    if (clickedWithinForm(target?.id)) return;
    if (!target) { updateFullBellString(bellType, bellTime) }
    else if (target.id === 'bellCancel') { handleBellCancel(); }
    toggleBellField(false)
  }

  const handleClearBlur = (id: any) => {
    if (id && (id === 'typeField' || id === 'timeField' || id === 'amPmField')) return;
    updateFullBellString(bellType, bellTime)
    toggleBellField(false);
  }

  return (
    <Box sx={singleTaskShell}>

      {(!viewBellField) ?

        <Box className={'singleTask'}>
          <span style={itemTextWithLeadIcon} onClick={() => toggleBellField(true)}>
            {bellOn ?
              <>
                <NotificationsActive style={singleTaskLeadIcon} />
                <span className={'singleText'}>
                  {`${bellTime} before (${bellType})`}
                </span>
              </>
              :
              <>
                <NotificationsOff style={singleTaskLeadIcon} />
                <span className={'singleText'}>
                  Off
                </span>
              </>
            }
          </span>
        </Box>
        :
        <Box className={'singleTask'} >
          <FormControl sx={{ m: '2px' }} size="small">
            <Select value={bellType} label="type" id='typeField' autoFocus
              onChange={(e) => handleBellTypeSelect(e.target.value)}
              onBlur={(e) => handleBlur(e.relatedTarget)}
            >
              {bellTypeList.map((bTp) => (<MenuItem key={bTp} value={bTp}>{bTp}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: '2px' }} size="small">
            <Select value={bellTime} label="Minute" id='timeField'
              onChange={(e) => handleBellTimeSelect(e.target.value)}
              onBlur={(e) => handleBlur(e.relatedTarget)}
            >
              {bellTimeList.map((bTm) => (<MenuItem key={bTm} value={bTm}>{bTm} {bTm !== bellTimes.none && 'before'}</MenuItem>))}
            </Select>
          </FormControl>
          {(!task) ? <></> :
            <IconButton onClick={() => handleBellCancel()} sx={{ marginLeft: '12px' }}>
              <FaUndoAlt id='bellCancel' tabIndex={3} size={16} style={darkest} />
            </IconButton>
          }
          <div style={{ display: 'inline-block' }}>
            <IconButton onClick={() => clearBell()} onBlur={(e) => handleClearBlur(e.relatedTarget?.id)}>
              <TiTimes id='bellClear' tabIndex={4} size={24} style={darkest} />
            </IconButton>
          </div>
        </Box>
      }
    </Box >
  );
}