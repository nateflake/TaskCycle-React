import { NavigateFunction } from "react-router-dom";
import { dbUrl } from "../constants/constants";

export const getPathEnd = (path: string, ifHome: string) => {
  if (path === '/') return ifHome;
  return path.substring(path.lastIndexOf('/') + 1);
};

export const properizeString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export const urlWithFilter = (
  pathName: string,
  done: string
) => {
  return `${dbUrl}${pathName}?doneFilter=${done}`
}

export const goBack = (setView: (show: string) => void, toShow: string, navigate: NavigateFunction | undefined) => {
  setView(toShow)
  if (navigate) navigate(-1)
}

export const isFilterActive = (suffix: string | undefined) => {
  const inactiveTabs = ['late', 'due', 'soon', 'later']
  return suffix === undefined || inactiveTabs.indexOf(suffix) === -1
}
