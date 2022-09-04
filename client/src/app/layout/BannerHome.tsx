import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { brandSlogan, brandTitle } from '../brand/brand';
import { show } from '../constants/constants';
import { useNavigate } from "react-router-dom";
import GenericButton from '../components/GenericButton';

interface Props {
  view: string
  pathName: string
  setView: (view: string) => void
}

export default function BannerHome({ pathName, view, setView }: Props) {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    setView(show.add)
  }

  return (
    <Container disableGutters style={{ display: 'flex', textAlign: 'end', alignItems: 'center', minWidth: '100%', paddingBottom: 16 }}>

      <Box display='flex' justifyContent='start' width='75%'>
        <Typography sx={{ fontSize: 44, marginRight: 10 }}>{brandTitle}</Typography>
        {pathName === '/' &&
          <Typography>{brandSlogan}</Typography>
        }
      </Box>

      <Box justifyContent='start' width='75%'>
        {view === show.tasks &&
          <GenericButton color={'green'} title={'Add'} onClick={handleAddButtonClick} />
        }
      </Box>

    </Container >
  );
}