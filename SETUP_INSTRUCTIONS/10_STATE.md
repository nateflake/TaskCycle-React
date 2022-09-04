## EXAMPLE: ADDING TO A LIST WITH STATE

  const [taskList, setTasks] = useState(tasks);

  // SIMPLE
  function addTask() {
    setTasks([...taskList, {
      id: 4,
      text: 'New Task',
      dueDate: new Date(2023, 6, 9, 13, 0, 0),
      bell: true
    },]);
  }

  // WTH PREVSTATE (benefit=incrementing)
  function addTask() {
    setTasks(prevState=>[...prevState, {
      id: prevState.length + 1,
      text: `New Task ${prevState.length + 1}#`,
      dueDate: new Date(2023, 6, 9, 13, 0, 0),
      bell: true
    },]);
  }


... after creating interface as model, change:
        const [taskList, setTasks] = useState(tasks);
  ... to:
        const [taskList, setTasks] = useState<Task[]>([]);
