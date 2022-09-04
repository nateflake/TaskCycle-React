import { NotificationsActive, NotificationsNone, NotificationsOff } from '@mui/icons-material';
import { BiCircle } from 'react-icons/bi';
import { TiFlag } from 'react-icons/ti';
import { HiOutlineCheckCircle, HiCheckCircle } from 'react-icons/hi';
import { TbFlag, TbFlagOff } from 'react-icons/tb';

export const getTabSet1 = (lateCount: number | undefined, dueCount: number | undefined, soonCount: number | undefined) => {
  return [
    { title: 'Late', suffix: 'late', count: lateCount },
    { title: 'Due', suffix: 'due', count: dueCount },
    { title: 'Soon', suffix: 'soon', count: soonCount },
  ];
}

export const getTabSet2 = () => {
  return [
    { title: 'Later', suffix: 'later', count: 0 },
    { title: 'All', suffix: 'all', count: 0 },
    { title: 'Archived', suffix: 'drop', count: 0 }
  ];
}

// STATUS ARRAYS
const statusArray = ['on_or_off', 'on', 'off'];
const end = statusArray.length - 1;
const getNext = (choice: string) => {
  const indexNow = statusArray.indexOf(choice);
  return indexNow === end ? 0 : indexNow + 1;
}

export const nextStatus = (choice: string, setNewState: any) => {
  setNewState(statusArray[getNext(choice)]);
}


export const filterIcon = (status: string, type: string, size: string) => {

  if (type === 'flag')
    return status === 'on_or_off' ? <TbFlag size={size} /> :
      status == 'on' ? <TiFlag size={size} /> :
        <TbFlagOff size={size} />
  else if (type === 'done')
    return status === 'on_or_off' ? <BiCircle size={size} /> :
      status == 'on' ? <HiCheckCircle size={size} /> :
        <HiOutlineCheckCircle size={size} />
  else if (type === 'bell')
    return status === 'on_or_off' ? <NotificationsNone sx={{ fontSize: `${size}px` }} /> :
      status == 'on' ? <NotificationsActive sx={{ fontSize: `${size}px` }} /> :
        <NotificationsOff sx={{ fontSize: `${size}px` }} />
}

export const toggleIcon = (status: boolean | undefined, type: string, size: string) => {

  if (type === 'flag')
    return status ?
      <TiFlag size={size} /> :
      <TbFlagOff size={size} />
  else if (type === 'done')
    return status ?
      <HiCheckCircle size={size} /> :
      <HiOutlineCheckCircle size={size} />
  else if (type === 'bell')
    return status ?
      <NotificationsActive sx={{ fontSize: `${size}px` }} /> :
      <NotificationsOff sx={{ fontSize: `${size}px` }} />
}