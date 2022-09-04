import { Box } from "@mui/system";
import { singleTaskShell } from "../../app/layout/styles";
import { toggleIcon } from "../../app/util/taskFilterManager";
import TaskStatusItem from "./TaskStatusItem";

interface Props {
  singleDone: boolean | undefined
  updateDone: () => void
  singleFlag: boolean | undefined
  updateFlag: () => void
}

export default function TaskStatusButtonRow({ singleDone, updateDone, singleFlag, updateFlag }: Props) {

  return (
    <Box sx={singleTaskShell}>
      <Box className={'singleTask'}>

        <TaskStatusItem
          toggleFx={updateDone}
          icon={toggleIcon(singleDone, 'done', '28')}
          descriptor={singleDone ? "done" : "to do"}
        />

        <TaskStatusItem
          toggleFx={updateFlag}
          icon={toggleIcon(singleFlag, 'flag', '28')}
          descriptor={singleFlag ? "flagged" : "unflagged"}
        />

      </Box>
    </Box>
  );
}