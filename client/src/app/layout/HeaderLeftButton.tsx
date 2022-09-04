import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  toggleTabVisibility: () => void
}

export default function HeaderLeftButton({ toggleTabVisibility }: Props) {
  return (
    <Box>
      <IconButton onClick={() => toggleTabVisibility()}>
        <KeyboardDoubleArrowLeft />
      </IconButton>
    </Box>
  );
}