## CREATE CONTROLLER WITH GET AND GETS
> In Controllers folder:
  - new file:
    TasksController.cs
    > in file:
      - need:

      [ApiController]
      [Route("api/[controller]")]

      - bring in context (see file)

      - endpoints

        [HttpGet(Name = "GetTasks")]
        public async Task<ActionResult<List<Entities.Task>>> GetTasks()
        {
          var tasks = await _context?.Tasks?.ToListAsync()!;
          ...
        }

        [HttpGet("{id}", Name = "GetTask")]
        public async Task<ActionResult<Entities.Task>> GetTask(int id)
        {
          var task = await _context?.Tasks?.SingleOrDefaultAsync(c => c.Id.Equals(id))!;
          ...
        }
      }

## TEST ENDPOINTS
> In Swagger:
  - Execute
      /api/Tasks
        (=> should list all tasks from DbInitializer)
    - Execute
      /api/Tasks/{id}
          (=> should list individual task from DbInitializer)
          (=> should return 404 not found for id not in DbInitializer range)
> In Postman:
    - GET with URL (then Send):
        http://localhost:<port #>/api/Tasks/
            (=> should list all tasks from DbInitializer)
    - GET with URL (then Send):
        http://localhost:<port #>/api/Tasks/<id #>
          (=> should list individual task from DbInitializer)
          (=> should return 404 not found for id not in DbInitializer range)        