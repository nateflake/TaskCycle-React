import { Link, useLocation } from "react-router-dom"
import { show } from "../constants/constants";
import { getPathEnd } from "../util/util";

interface Props {
  view: string;
  setView: (view: string) => void
}

export default function Footer({ view, setView }: Props) {

  const location = useLocation()
  const pathName = location.pathname;
  const pathSuffix = getPathEnd(pathName, 'all')

  return (
    <footer>
      {
        view !== show.single &&
        <>
          <p>Copyright &copy; 2022</p>
          <Link to={pathSuffix !== 'about' ? '/about' : '/Tasks/late'}>
            {pathSuffix !== 'about' ? 'About' : 'Home'}
          </Link>
        </>
      }
    </footer>
  );
}
