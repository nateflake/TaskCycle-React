import Container from '@mui/material/Container';
import { getPathEnd, properizeString } from '../util/util';

const getPathTitle = (path: string) => {
  const pathEnd = getPathEnd(path, '');
  return properizeString(pathEnd);
}

export default function Banner({ path }: { path: string }) {
  return (
    <Container style={{ padding: 0 }}>
      <h1>{getPathTitle(path)}</h1>
    </Container >
  );
}