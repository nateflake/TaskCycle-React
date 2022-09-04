import { dbUrl } from "../constants/constants"
import { TaskModel } from "../models/taskModel"

export function rebuildMonthDayYear(oldDate: Date, newDate: Date) {
  let newFullYear = newDate.getUTCFullYear()
  let newMonth = newDate.getUTCMonth()
  let newDay = newDate.getUTCDate()

  newDate = oldDate
  newDate.setFullYear(newFullYear)
  newDate.setMonth(newMonth)
  newDate.setDate(newDay)

  return new Date(newDate)
}

export function rebuildTime(oldDate: Date, newTime: string) {
  let tempDate = new Date("1970-01-01 " + newTime);

  let newHours = tempDate.getUTCHours()
  let newMinutes = tempDate.getUTCMinutes()
  let newSeconds = tempDate.getUTCSeconds()
  let newMilliseconds = tempDate.getUTCMilliseconds()


  let newDate = oldDate
  newDate.setHours(newHours)
  newDate.setMinutes(newMinutes)
  newDate.setSeconds(newSeconds)
  newDate.setMilliseconds(newMilliseconds)

  return new Date(newDate)
}

export function buildDateAsDate(date: Date | undefined) {
  if (!date) return new Date()
  return new Date(date)
}

export const buildTime = (hr: string | undefined, min: string | undefined, amPm: string | undefined) => { return `${hr}:${min} ${amPm}` }

export const updateTask = async (newTask: TaskModel | undefined) => {
  if (newTask) {
    const response = await fetch(`${dbUrl}/Tasks/${newTask.id}`,
      {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newTask)
      });
    const json = await response.json();
    return json
  }
}

export const createTask = (newTask: TaskModel | undefined) => {
  if (newTask) {
    fetch(`${dbUrl}/Tasks`,
      {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newTask)
      });
  }
}

export const destroyTask = (taskToDelete: TaskModel | undefined) => {
  if (taskToDelete) {
    fetch(`${dbUrl}/Tasks/${taskToDelete.id}`,
      {
        method: "DELETE",
        headers: { 'Content-type': 'application/json' },
        // body: JSON.stringify(taskToDelete)
      });
  }
}

export const parseHr = (time: string | undefined) => { return (!time || time.length) < 8 ? '--' : time!.substring(0, 2) }
export const parseMin = (time: string | undefined) => { return (!time || time.length) < 8 ? '--' : time!.substring(3, 5) }
export const parseAmPm = (time: string | undefined) => { return (!time || time.length) < 8 ? '--' : time!.substring(6, 8) }

export const timeValIsPartial = (hr: string, min: string, amPm: string) => {
  if (hr == '--' && min == '--' && amPm == '--') return false;
  return (hr == '--' || min == '--' || amPm == '--')
}

export const bellValIsPartial = (type: string | undefined, time: string | undefined) => {
  if (type == '--' && time == '--') return false;
  return (type == '--' || time == '--')
}