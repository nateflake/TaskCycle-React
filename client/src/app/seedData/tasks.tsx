import { bellTimes, bellTypes } from "../constants/constants";
import { TaskModel } from "../models/taskModel";

const tasks: TaskModel[] =
  [
    {
      id: 1,
      title: 'Trash to Curb',
      text: 'take out kitchen trash first',
      dueDate: new Date(2023, 6, 5, 12, 0, 0),
      dueTime: "--:--",
      bellType: bellTypes.email,
      bellTime: bellTimes.mins15,
      flag: false,
      done: false,
      drop: false
    },
    {
      id: 2,
      title: 'Order Pizza',
      text: '3 total, at least one veggie',
      dueDate: new Date(2023, 6, 5, 17, 30, 0),
      dueTime: "--:--",
      bellType: bellTypes.email,
      bellTime: bellTimes.mins15,
      flag: true,
      done: false,
      drop: false
    },
    {
      id: 3,
      title: 'Wash Car',
      text: 'new detailer spray in garage supply cabinet',
      dueDate: new Date(2023, 6, 6, 6, 0, 0),
      dueTime: "--:--",
      bellType: bellTypes.email,
      bellTime: bellTimes.mins15,
      flag: false,
      done: false,
      drop: false
    }
  ];

export default tasks;