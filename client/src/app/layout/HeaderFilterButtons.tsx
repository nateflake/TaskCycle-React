import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { isFilterActive } from "../util/util";

interface Props {
  done: string
  flag: string
  bell: string
  filterIcon: (status: string, type: string, size: string) => JSX.Element | undefined
  nextStatus: (done: string, setSetDone: any) => void
  setSetDone: (done: string) => void
  setSetFlag: (flag: string) => void
  setSetBell: (bell: string) => void
  suffix: string | undefined
}

export default function HeaderFilterButtons({ done, flag, bell, filterIcon, nextStatus, setSetDone, setSetFlag, setSetBell, suffix }: Props) {

  const doneIcon = filterIcon(done, 'done', '18')
  const blank = () => { }
  return (
    <Box className='filterIconBox'>
      {
        (isFilterActive(suffix)) ?
          <IconButton onClick={() => nextStatus(done, setSetDone)}>
            {doneIcon}
          </IconButton>
          :
          <IconButton onClick={() => blank()} className={'disabled'}>
            {doneIcon}
          </IconButton>
      }
      <IconButton onClick={() => nextStatus(flag, setSetFlag)} sx={{ size: 'small' }}>
        {filterIcon(flag, 'flag', '18')}
      </IconButton>

      <IconButton onClick={() => nextStatus(bell, setSetBell)} sx={{ size: 'small' }}>
        {filterIcon(bell, 'bell', '18')}
      </IconButton>
    </Box>
  );
}