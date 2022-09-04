## PASSING PROPS IN TYPESCRIPT


## OVERLY SIMPLIFIED EXAMPLE
// PARENT
export default function Parent() {
  return (
    <Container>
      <Child title={'Page Title'} description={'This is a description'} />
    </Container >
  );
}

// CHILD OPTION 1: INLINE TYPING
export default function Child({ title, description }: { title: string, description: string }) {
  return (
    <h1>{title}</h1>
    <h4>{description}</h4>
  );
}


// CHILD OPTION 2: TYPING

type PropTypes = {
  title: string,
  description: string
}

export default function Child({ title, description }: PropTypes) {
  return (
    <h1>{title}</h1>
    <h4>{description}</h4>
  );
}


// CHILD OPTION 3: INTERFACE

interface Props {
  title: string,
  description: string
}

export default function Child({ title, description }: Props) {
  return (
    <h1>{title}</h1>
    <h4>{description}</h4>
  );
}


## EXAMPLE WITH OBJECT AS PROP
// TYPE IN STANDALONE FILE
export type TaskModel = {
  id: number;
  text: string;
  dueDate: Date;
  bell: boolean;
}

// PARENT
interface Props {
  tasks: TaskModel[]
}

export default function Tasks({ tasks }: Props) {
  return (
    <>
      {tasks.map((task) => (<Task key={task.id} task={task} />))}
    </>
  );
}

// CHILD
interface Props {
  task: TaskModel
}

export default function Task({ task }: Props) {
  const { text, dueDate, bell, } = task;
  return (
    <div className={`task ${bell ? 'bell' : ''}`}>
      <h3>{text}</h3>
      <p>{dueDate.toString()}</p>
    </div >
  );
}
