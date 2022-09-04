import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom"
import { filterIcon, nextStatus } from "../util/taskFilterManager";
import { getPathEnd } from "../util/util";
import Banner from "./Banner";
import BannerHome from "./BannerHome";
import HeaderFilterButtons from "./HeaderFilterButtons";
import HeaderLeftButton from "./HeaderLeftButton";
import HeaderRightButton from "./HeaderRightButton";
import HeaderTab from "./HeaderTab";
import { sxMenuOuterBox, sxMenuInnerRightBox } from "./styles";

interface Props {
  view: string;
  setView: (view: string) => void
  done: string
  flag: string
  bell: string
  setSetDone: (done: string) => void
  setSetFlag: (flag: string) => void
  setSetBell: (bell: string) => void
  primaryTabsVisible: boolean
  toggleTabVisibility: () => void
  linksToMap: { title: string; suffix: string; count: number | undefined; }[]
  tab: string
  setSetTab: (tabName: string, doneNow: string, flagNow: string, bellNow: string) => void
  fetchTaskList: (done: string, flag: string, bell: string, json?: string | undefined) => void
}

export default function Header({ view, setView, done, flag, bell, setSetDone, setSetFlag, setSetBell, primaryTabsVisible, toggleTabVisibility, linksToMap, tab, setSetTab, fetchTaskList }: Props) {

  const location = useLocation()
  const pathName = location.pathname;
  const pathSuffix = getPathEnd(pathName, 'all')

  return (
    <>
      {/* ######## BANNER ######## */}
      {
        pathName === '/about' ? <Banner path={pathName} /> : <BannerHome pathName={pathName} view={view} setView={setView} />
      }


      <Container disableGutters className='filterMenuOuterContainer'>
        <Box sx={sxMenuOuterBox} className='filterMenuBox'>


          {/* ######## TOGGLING FILTERS ######## */}
          <HeaderFilterButtons
            done={done} flag={flag} bell={bell} filterIcon={filterIcon} nextStatus={nextStatus}
            setSetDone={setSetDone} setSetFlag={setSetFlag} setSetBell={setSetBell}
            suffix={pathSuffix}
          />


          <Box sx={sxMenuInnerRightBox}>
            {/* LEFT ARROW (TO RE-ACCESS PRIMARY TABS) */}
            {
              primaryTabsVisible === false &&
              <HeaderLeftButton toggleTabVisibility={toggleTabVisibility} />
            }


            {/* TABS (PRIMARY OR SECONDARY) */}
            {
              linksToMap.map(({ title, suffix, count }) => (
                <HeaderTab
                  key={title} title={title} count={count} tab={tab} suffix={suffix}
                  done={done} flag={flag} bell={bell}
                  setSetTab={setSetTab} fetchTaskList={fetchTaskList}
                />
              ))
            }


            {/* RIGHT ARROW (TO ACCESS SECONDARY TABS) */}
            {
              primaryTabsVisible &&
              <HeaderRightButton toggleTabVisibility={toggleTabVisibility} />
            }


          </Box>
        </Box>
      </Container>

    </>
  );
}
