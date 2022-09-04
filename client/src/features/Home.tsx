import { show } from "../app/constants/constants";
import AddTaskPage from "./AddTaskPage";
import TaskPageLayout from "./HomeComponents/TaskPageLayout";

interface Props {
  view: string
  setView: (view: string) => void
  newNav: (tabName: string) => void
}

export default function Home({ view, setView, newNav }: Props) {

  return (
    <>
      {
        view === show.add ? <AddTaskPage setView={setView} /> :
          <TaskPageLayout view={view} setView={setView} newNav={newNav} />
      }
    </>
  );
}