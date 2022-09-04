export const dbUrl = 'http://localhost:5085/api';

export const darkestColor = 'black'
export const onColor = '#0000008a'
export const offColor = '#c0c0c0'

export const show = {
  tasks: 'tasks',
  add: 'add',
  single: 'single',
  about: 'about'
}

export const hours = {
  none: '--',
  zero: '00',
  one: '01',
  two: '02',
  three: '03',
  four: '04',
  five: '05',
  six: '06',
  seven: '07',
  eight: '08',
  nine: '09',
  ten: '10',
  eleven: '11',
  twelve: '12'
}
export const hourList = [hours.none, hours.zero, hours.one, hours.two, hours.three, hours.four, hours.five, hours.six, hours.seven, hours.eight, hours.nine, hours.ten, hours.eleven, hours.twelve];


export const minutes = {
  none: '--',
  zero: '00',
  fifteen: '15',
  thirty: '30',
  fortyFive: '45'
}
export const minuteList = [minutes.none, minutes.zero, minutes.fifteen, minutes.thirty, minutes.fortyFive]

export const amPms = {
  none: '--',
  am: 'AM',
  pm: 'PM'
}
export const amPmList = [amPms.none, amPms.am, amPms.pm]

export const bellTypes = {
  none: '--',
  email: 'email',
  sms: 'sms'
}
export const bellTypeList = [bellTypes.none, bellTypes.email, bellTypes.sms];

export const bellTimes = {
  none: '--',
  mins5: '5 mins',
  mins15: '15 mins',
  mins30: '30 mins',
  hrs1: '1 hr',
  days1: '1 day'
}
export const bellTimeList = [bellTimes.none, bellTimes.mins5, bellTimes.mins15, bellTimes.mins30, bellTimes.hrs1, bellTimes.days1]

export const singleTaskModes = {
  add: 'add',
  edit: 'edit'
}