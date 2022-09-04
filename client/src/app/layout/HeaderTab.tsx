import { Badge, Button } from "@mui/material";
import { Box } from "@mui/system";
import { colorOff, colorOn, headerTabBadge, headerTabButton, headerTabButtonBox } from "./styles";

interface Props {
  title: string
  count: number | undefined
  tab: string
  suffix: string
  done: string
  flag: string
  bell: string
  setSetTab: (suffix: string, done: string, flag: string, bell: string) => void
  fetchTaskList: (done: string, flag: string, bell: string, json?: string | undefined) => void
}

export default function HeaderTab({ title, count, tab, suffix, done, flag, bell, setSetTab, fetchTaskList }: Props) {

  const handleClick = () => {
    setSetTab(suffix, done, flag, bell)
    fetchTaskList(done, flag, bell)
  }

  return (
    <Box key={title} sx={headerTabButtonBox}>
      <Badge
        variant="dot"
        showZero={false}
        badgeContent={count}
        color={title === 'Late' ? 'warning' : 'info'}
        sx={headerTabBadge}
        overlap='circular'
      >

        <Button
          onClick={() => handleClick()}
          sx={[headerTabButton, tab === suffix ? colorOn : colorOff]}
        >
          {title.toUpperCase()}
        </Button>
      </Badge>
    </Box>

  );
}