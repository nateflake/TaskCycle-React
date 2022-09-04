import { NotificationsActive, NotificationsOff } from '@mui/icons-material';
import { Box, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { MdOutlineUnarchive } from 'react-icons/md';
import { TbFlagOff } from 'react-icons/tb';
import { TiFlag, TiTimes } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { microIcon, miniIcon, taskLeadButton } from '../layout/styles';
import { TaskModel } from "../models/taskModel";
import { generateDateDescription, generateDueDateDate } from '../util/taskBuilder';
import { filterIcon } from '../util/taskFilterManager';

interface Props {
  task: TaskModel
  updateDone: (task: TaskModel) => void
  updateFlag: (task: TaskModel) => void
  updateDrop: (task: TaskModel) => void
}

export default function Task({ task, updateDone, updateFlag, updateDrop }: Props) {
  const { id, title, dueDate, dueTime, text, flag, done } = task;

  const dueDateAsDate = new Date(Date.parse(dueDate.toString()));
  const dueDateDate = generateDueDateDate(dueDateAsDate);
  const dueDateTime = dueTime;
  const dueDateDescription = generateDateDescription(dueDateAsDate);

  const doneStatus = done ? 'on' : 'off'

  const handleDoneClick = () => { updateDone(task) }
  const handleFlagClick = () => { updateFlag(task) }
  const handleArchiveClick = () => { updateDrop(task) }

  const singleUrl = `/Tasks/${id}`

  const dateTimeString = dueDateTime == '--:-- --' ? `${dueDateDate} (all day)` : `${dueDateDate} @ ${dueDateTime}`

  return (

    <ListItem
      className={'task'}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >

      <ListItemIcon
        onClick={() => handleDoneClick()}
        sx={taskLeadButton}
      >
        {filterIcon(doneStatus, 'done', '24')}
      </ListItemIcon>

      <ListItemText>
        <Box>
          <h3>
            <Link to={singleUrl} className='taskTitle'>
              {title}
            </Link>
            <Box style={{ width: 22, height: 22, cursor: 'pointer' }}
              onClick={() => handleArchiveClick()}
            >
              {
                task.drop ?
                  <MdOutlineUnarchive className='dropIcon' style={miniIcon} />
                  :
                  <TiTimes className='dropIcon' style={miniIcon} />
              }
            </Box>
          </h3>

          <Link to={singleUrl} className='taskText'>
            {text}
          </Link>

          <h3 className='taskTime'>
            <Link to={singleUrl} className='taskTime'>

              {
                task.bellType == '--' ?
                  <NotificationsOff className='off' style={microIcon} />
                  :
                  <NotificationsActive className='on' style={microIcon} />
              }
              {`${dateTimeString}`}

              <span style={{ marginLeft: 10 }}>{dueDateDescription}</span>
            </Link>

            <Box style={{ width: 22, height: 22, cursor: 'pointer' }}
              onClick={() => handleFlagClick()}
            >
              {flag ?
                <TiFlag size={20} /> :
                <TbFlagOff size={18} />
              }
            </Box>

          </h3>

        </Box >

      </ListItemText>
    </ListItem >
  );
}