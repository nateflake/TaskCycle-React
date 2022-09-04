import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Tasks from "../../app/components/Tasks";
import { dbUrl } from "../../app/constants/constants";
import Footer from "../../app/layout/Footer";
import Header from "../../app/layout/Header";
import { outerMostContainer } from "../../app/layout/styles";
import { TaskModel } from "../../app/models/taskModel";
import { updateTask } from "../../app/util/singleTaskManagement";
import { getTabSet1, getTabSet2 } from "../../app/util/taskFilterManager";
import { presetTaskList } from "../../app/util/taskManagement";
import { getPathEnd, isFilterActive } from "../../app/util/util";

interface Props {
  view: string
  setView: (view: string) => void
  newNav: (tabName: string) => void
}

export default function TaskPageLayout({ view, setView, newNav }: Props) {

  const location = useLocation()
  const pathName = location.pathname;
  const pathSuffix = getPathEnd(pathName, 'late')
  const [tab, setTab] = useState(pathSuffix);

  const [searchParams, setSearchpParams] = useSearchParams();
  const initialDoneFilter = searchParams.get('doneFilter') ?? 'on_or_off'
  const initialFlagFilter = searchParams.get('flagFilter') ?? 'on_or_off'
  const initialBellFilter = searchParams.get('bellFilter') ?? 'on_or_off'

  // STATUS FILTER ICONS
  const [done, setDone] = useState(initialDoneFilter);
  const [flag, setFlag] = useState(initialFlagFilter);
  const [bell, setBell] = useState(initialBellFilter);

  // GET TASK LIST ASAP
  const [taskList, setTaskList] = useState<TaskModel[] | undefined>();
  if (!taskList) fetchTaskList(done, flag, bell)

  function fetchTaskList(done: string, flag: string, bell: string, json?: string) {
    fetch(`${dbUrl}/Tasks/${tab}?doneFilter=${done}&flagFilter=${flag}&bellFilter=${bell}`)
      .then(r => r.json()).then(d => setTaskList(d))
  }

  // TAB, DONE, FLAG & BELL IN STATE
  const setSetTab = (tabName: string, doneNow: string, flagNow: string, bellNow: string) => {
    setTab(tabName)
    setSearchpParams(`doneFilter=${doneNow}&flagFilter=${flagNow}&bellFilter=${bellNow}`) // necessary?
    newNav(`/Tasks/${tabName}?doneFilter=${doneNow}&flagFilter=${flagNow}&bellFilter=${bellNow}`);
  }

  const setSetDone = (newDone: string) => { setDone(newDone); setTabFetchList(tab, newDone, flag, bell) }
  const setSetFlag = (newFlag: string) => { setFlag(newFlag); setTabFetchList(tab, done, newFlag, bell) }
  const setSetBell = (newBell: string) => { setBell(newBell); setTabFetchList(tab, done, flag, newBell) }
  const setTabFetchList = (tab: string, done: string, flag: string, bell: string) => {
    setSetTab(tab, done, flag, bell)
    fetchTaskList(done, flag, bell)
  }

  // TAB, DONE, FLAG & BELL IN DB
  const updateDone = async (task: TaskModel) => { if (task) { task.done = !task.done; updateTaskAndFetchList(task) } }
  const updateFlag = async (task: TaskModel) => { if (task) { task.flag = !task.flag; updateTaskAndFetchList(task) } }
  const updateDrop = (task: TaskModel) => { if (task) { task.drop = !task.drop; updateTaskAndFetchList(task); } }
  const updateTaskAndFetchList = async (task: TaskModel) => { const r = await updateTask(task); fetchTaskList(done, flag, bell, r) }

  // FILTER MENUs
  useEffect(() => {
    if (!isFilterActive(pathSuffix)) setDone('off');
    fetchTaskList(done, flag, bell)
  }, [tab, done, flag, bell, pathSuffix])


  // COUNT BADGES FOR IMPORTANT TABS: LATE, DUE, SOON 
  const [lateCount, setLateCount] = useState<number>();
  const [dueCount, setDueCount] = useState<number>();
  const [soonCount, setSoonCount] = useState<number>();
  useEffect(() => { fetch(`${dbUrl}/Tasks/late_count/`).then(r => r.json()).then(d => setLateCount(d)) }, [])
  useEffect(() => { fetch(`${dbUrl}/Tasks/due_count/`).then(r => r.json()).then(d => setDueCount(d)) }, [])
  useEffect(() => { fetch(`${dbUrl}/Tasks/soon_count/`).then(r => r.json()).then(d => setSoonCount(d)) }, [])

  // TOGGLE PRIMARY & SECONDARY TABS
  const tabSet1 = getTabSet1(lateCount, dueCount, soonCount);
  const tabSet2 = getTabSet2();

  const getTabsByPath = () => {
    const pathSuffix = getPathEnd(pathName, 'all');
    return tabSet1.filter(function (entry) { return entry.suffix === pathSuffix; }).length > 0;
  }

  const [tabSet1Visible, setTabVisibility] = useState(getTabsByPath);
  const toggleTabVisibility = () => { setTabVisibility(!tabSet1Visible); }

  const linksToMap = tabSet1Visible ? tabSet1 : tabSet2;

  return (
    <>
      {
        <Container disableGutters sx={outerMostContainer}>
          <Header
            view={view} setView={setView}
            done={done} flag={flag} bell={bell} setSetDone={setSetDone} setSetFlag={setSetFlag} setSetBell={setSetBell}
            primaryTabsVisible={tabSet1Visible} toggleTabVisibility={toggleTabVisibility}
            linksToMap={linksToMap} tab={tab}
            setSetTab={setSetTab} fetchTaskList={fetchTaskList}
          />
        </Container>
      }
      {
        (taskList && taskList.length > 0 ?
          <Tasks
            tasks={taskList}
            updateDone={updateDone}
            updateFlag={updateFlag}
            updateDrop={updateDrop}
          />
          :
          <h3 style={{ marginTop: '10px' }}>No Tasks</h3>)
      }
      <Footer view={view} setView={setView} />
    </>
  );
}