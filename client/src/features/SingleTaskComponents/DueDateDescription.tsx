import { Box } from "@mui/system";
import { singleTaskShell } from "../../app/layout/styles";
import { buildDateAsDate } from "../../app/util/singleTaskManagement";
import { generateDateDescription, generateDueDateDate } from "../../app/util/taskBuilder";

interface Props {
  viewDueDateField: boolean
  viewDueTimeField: boolean
  dueDate: Date | undefined
}

export default function DueDateDescription({ viewDueDateField, viewDueTimeField, dueDate }: Props) {

  const dueDateAsDate = buildDateAsDate(dueDate)
  const dueDateDescription = !dueDate ? '' : generateDateDescription(dueDateAsDate);

  return (
    <Box sx={singleTaskShell}>
      {
        (!viewDueDateField && !viewDueTimeField) &&
        <Box className={'singleTask inactive'}><h3 className={'itemSubText2'}>{dueDateDescription}</h3></Box>
      }
    </Box>
  );
}