> In folder: client > src > app > models:
    task.ts
 
> In swagger / postman:
    copy JSON data from result of query

> at json2ts.com
    paste in JSON result to convert to typescript interface
    copy output

> in task.ts
    paste output:

  export type TaskModel = {
    id: number;
    title: string;
    text?: string;
    dueDate: Date;
    flag: boolean;
  }
  ** use ? for optional items