import { Container } from "@mui/system";
import { show } from "../app/constants/constants";
import Footer from "../app/layout/Footer";
import { outerMostContainer } from "../app/layout/styles";

interface Props {
  setView: (view: string) => void
}

export default function About({ setView }: Props) {
  return (
    <>
      <Container disableGutters sx={outerMostContainer}>
        <h4>TaskCycle</h4>
        <p>Version 1.0.0</p>
      </Container>
      <Footer view={show.about} setView={setView} />
    </>
  );
}