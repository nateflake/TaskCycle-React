import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  toggleTabVisibility: () => void
}

export default function HeaderRightButton({ toggleTabVisibility }: Props) {
  return (
    <Box sx={{ alignContent: 'start' }}>
      <IconButton onClick={() => toggleTabVisibility()}>
        <KeyboardDoubleArrowRight />
      </IconButton>
    </Box>
  );
}