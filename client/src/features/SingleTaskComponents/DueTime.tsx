import { FaUndoAlt } from 'react-icons/fa';
import { TiTimes } from 'react-icons/ti';
import { FormControl, IconButton, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { darkest, itemTextWithLeadIcon, singleTaskLeadIcon, singleTaskShell } from "../../app/layout/styles";
import { TaskModel } from "../../app/models/taskModel";
import { buildTime, parseAmPm, parseHr, parseMin, timeValIsPartial } from "../../app/util/singleTaskManagement";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { amPmList, hourList, minuteList } from '../../app/constants/constants';

interface Props {
  viewDueTimeField: boolean
  setViewDueTimeField: (viewDueTimeField: boolean) => void
  dueTime: string | undefined
  setDueTime: (time: string | undefined) => void
  updateDueTime?: (newTime: string | undefined) => void
  task?: TaskModel | undefined
  focusOnField: boolean
}

export default function DueTime({ viewDueTimeField, setViewDueTimeField, dueTime, setDueTime, updateDueTime, task, focusOnField }: Props) {

  const dueHr = parseHr(dueTime)
  const dueMin = parseMin(dueTime)
  const dueAmPm = parseAmPm(dueTime)

  const handleHr = (newHr: string) => { setDueTime(buildTime(newHr, dueMin, dueAmPm)); }
  const handleMin = (newMin: string) => { setDueTime(buildTime(dueHr, newMin, dueAmPm)); }
  const handleAmPm = (newAmPm: string) => { setDueTime(buildTime(dueHr, dueMin, newAmPm)); }

  const resetTime = () => { if (task) setDueTime(buildTime(parseHr(task.dueTime), parseMin(task.dueTime), parseAmPm(task.dueTime))) }
  const clearTime = () => { setDueTime('--:-- --') }
  const setAndUpdateTime = (time: string | undefined) => { setDueTime(time); if (task) updateDueTime!(time); }
  const handleTimeCancel = () => { if (task) setAndUpdateTime(task.dueTime); resetTime(); }

  const updateFullTimeString = (hr: string, min: string, amPm: string) => {
    if (timeValIsPartial(hr, min, amPm)) { resetTime(); return; }
    setAndUpdateTime(buildTime(hr, min, amPm))
  }

  const clickedWithinForm = (id: string) => { return (id && (id === 'hourField' || id === 'minuteField' || id === 'amPmField')) }

  const toggleDueTimeField = (isOpen: boolean) => { setViewDueTimeField(isOpen); }

  const handleBlur = (target: any) => {
    if (target?.id === 'timeClear') return;
    if (clickedWithinForm(target?.id)) return;
    if (!target) { updateFullTimeString(dueHr, dueMin, dueAmPm) }
    else if (target.id === 'timeCancel') { handleTimeCancel(); }
    toggleDueTimeField(false)
  }

  const handleClearBlur = (id: any) => {
    if (id && (id === 'hourField' || id === 'minuteField' || id === 'amPmField')) return;
    updateFullTimeString(dueHr, dueMin, dueAmPm)
    toggleDueTimeField(false);
  }

  const dueTimeString = dueTime === '--:-- --' ? 'All Day' : dueTime

  return (
    <Box sx={singleTaskShell}>
      {
        (!viewDueTimeField) ?

          <Box className={'singleTask'}>
            <span style={itemTextWithLeadIcon}>
              <AiOutlineClockCircle style={singleTaskLeadIcon} />
              <span className={'singleText'} onClick={(open) => toggleDueTimeField(true)}>
                {`${dueTimeString}`}
              </span>
            </span>
          </Box>
          :
          <Box className={'singleTask'} >
            <FormControl sx={{ m: '2px' }} size="small">
              <Select value={dueHr} label="Hour" id='hourField' autoFocus
                onChange={(e) => handleHr(e.target.value)}
                onBlur={(e) => handleBlur(e.relatedTarget)}
              >
                {hourList.map((hr) => (<MenuItem key={hr} value={hr}>{hr}</MenuItem>))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: '2px' }} size="small">
              <Select value={dueMin} label="Minute" id='minuteField'
                onChange={(e) => handleMin(e.target.value)}
                onBlur={(e) => handleBlur(e.relatedTarget)}
              >
                {minuteList.map((min) => (<MenuItem key={min} value={min}>{min}</MenuItem>))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: '2px' }} size="small">
              <Select value={dueAmPm} label="Hour" id='amPmField'
                onChange={(e) => handleAmPm(e.target.value)}
                onBlur={(e) => handleBlur(e.relatedTarget)}
              >
                {amPmList.map((amPm) => (<MenuItem key={amPm} value={amPm}>{amPm}</MenuItem>))}
              </Select>
            </FormControl>
            {(!task) ? <></> :
              <IconButton onClick={() => handleTimeCancel()} sx={{ marginLeft: '12px' }}>
                <FaUndoAlt id='timeCancel' tabIndex={3} size={16} style={darkest} />
              </IconButton>
            }
            <div style={{ display: 'inline-block' }}>
              <IconButton onClick={() => clearTime()} onBlur={(e) => handleClearBlur(e.relatedTarget?.id)}>
                <TiTimes id='timeClear' tabIndex={4} size={24} style={darkest} />
              </IconButton>
            </div>
          </Box>
      }
    </Box>
  );
}