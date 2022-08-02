namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
  private readonly CycleContext _context;

  public TasksController(CycleContext context)
  {
    _context = context;
  }

  [HttpGet(Name = "GetTasks")]
  public async Task<ActionResult<List<Entities.Task>>> GetTasks()
  {
    var tasks = await _context?.Tasks?.ToListAsync()!;
    if (_context.Tasks == null) return NotFound();
    return tasks;
  }

  [HttpGet("{id}", Name = "GetTask")]
  public async Task<ActionResult<Entities.Task>> GetTask(int id)
  {
    var task = await _context?.Tasks?.SingleOrDefaultAsync(c => c.Id.Equals(id))!;
    if (task == null) return NotFound();
    return task;
  }
}