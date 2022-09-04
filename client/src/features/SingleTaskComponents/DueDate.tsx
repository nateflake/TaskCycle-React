import { AiOutlineCalendar } from 'react-icons/ai';
import { Box } from "@mui/system";
import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-date-picker";
import { TaskModel } from "../../app/models/taskModel";
import { buildDateAsDate, rebuildMonthDayYear } from "../../app/util/singleTaskManagement";
import { generateDueDateDate } from "../../app/util/taskBuilder";
import { itemTextWithLeadIcon, singleTaskLeadIcon, singleTaskShell } from "../../app/layout/styles";

interface Props {
  dueDate: Date | undefined
  setDueDate: Dispatch<SetStateAction<Date | undefined>>
  viewDueDateField: boolean
  setViewDueDateField: (viewDueDateField: boolean) => void
  updateDate: (newDate: Date) => void
  task?: TaskModel | undefined
}

export default function DueDate({ dueDate, setDueDate, viewDueDateField, setViewDueDateField, updateDate, task }: Props) {

  const dueDateAsDate = buildDateAsDate(dueDate)
  const dueDateDate = !dueDate ? '' : generateDueDateDate(dueDateAsDate);
  const toggleDueDateField = () => { setViewDueDateField(!viewDueDateField); }
  const handleDatePicker = (newDate: any) => { updateDate(rebuildMonthDayYear(dueDateAsDate, newDate)) }
  const handleDateCancel = () => { if (task) setDueDate(task.dueDate); toggleDueDateField(); }
  const handleBlur = (target: any) => {
    if (!target) {
      toggleDueDateField()
    }
  }

  return (
    <Box sx={singleTaskShell}>

      {(!viewDueDateField) ?

        <Box className={'singleTask'}>
          <span style={itemTextWithLeadIcon}>
            <AiOutlineCalendar style={singleTaskLeadIcon} />
            <span className={'singleText'} onClick={() => toggleDueDateField()}>
              {dueDateDate}
            </span>
          </span>
        </Box>
        :
        <Box className={'singleTask'} >
          <form onBlur={(e) => handleBlur(e.relatedTarget)}>
            <DatePicker
              value={dueDateAsDate} onChange={(value: any) => handleDatePicker(value)} autoFocus />
          </form>
        </Box>
      }
    </Box>
  );
}