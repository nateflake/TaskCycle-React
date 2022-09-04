import { Box } from "@mui/system";
import { itemTextWithLeadIcon } from "../../app/layout/styles";

interface Props {
  toggleFx: () => void
  icon: JSX.Element | undefined
  descriptor: string | undefined
}

export default function TaskStatusItem({ toggleFx, icon, descriptor }: Props) {
  return (
    <Box className={'statusItem'}>
      <h3 className={'itemStatus'}>
        <Box style={itemTextWithLeadIcon}>
          <span onClick={() => toggleFx()}>
            {icon}
          </span>
          <span style={{ marginLeft: '10px' }} onClick={() => toggleFx()}>
            {descriptor}
          </span>
        </Box>
      </h3>
    </Box>
  );
}