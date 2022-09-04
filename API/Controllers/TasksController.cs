using System.Linq;
using API.Entities;

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

  [HttpPost]
  public async Task<ActionResult<List<Entities.Task>>> CreateNewTask([FromBody] Entities.Task newTask)
  {
    _context?.Tasks?.Add(newTask);
    var result = await _context?.SaveChangesAsync()! > 0;

    if (result) return Ok();//CreatedAtRoute("all", new { Id = newTask.Id }, newTask);

    return BadRequest(new ProblemDetails { Title = "Problem creating new product" });
  }

  [HttpGet(Name = "GetAllTasks")]
  public async Task<ActionResult<List<Entities.Task>>> GetAllTasks()
  {
    var tasks = await _context?.Tasks?
    .Where(c => !c.Drop)
    .ToListAsync()!;
    if (_context.Tasks == null) return NotFound();

    return tasks;
  }

  [HttpGet("count")]
  public async Task<ActionResult<int>> GetTaskCount()
  {
    return await _context?.Tasks?
    .Where(c => !c.Drop)
    .CountAsync()!;
  }

  [HttpGet("home")]
  public async Task<ActionResult<List<Entities.Task>>> GetTasks(
    [FromQuery] string? flagFilter = "on_or_off",
    [FromQuery] string? doneFilter = "on_or_off",
    [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    var tasks = await _context?.Tasks?
    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .Where(c => !c.Drop)
    .ToListAsync()!;
    if (_context.Tasks == null) return NotFound();

    return tasks;
  }

  [HttpGet("all")]
  public async Task<ActionResult<List<Entities.Task>>> GetAllTasks(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
    )
  {
    var tasks = await _context?.Tasks?
    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .Where(c => !c.Drop)
    .ToListAsync()!;
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

  [HttpPut("{id}", Name = "UpdateTask")]
  public async Task<ActionResult<Entities.Task>> UpdateTask(
      int id,
    [FromBody] TaskAsJson taskAsJson
    )
  {
    var task = await _context?.Tasks?.SingleOrDefaultAsync(c => c.Id.Equals(id))!;
    if (task == null) return NotFound();

    task.Title = taskAsJson.title;
    task.Text = taskAsJson.text;
    task.DueDate = DateTime.Parse(taskAsJson.dueDate!);
    task.DueTime = taskAsJson.dueTime;
    task.BellType = taskAsJson.bellType;
    task.BellTime = taskAsJson.bellTime;
    task.Flag = taskAsJson.flag;
    task.Done = taskAsJson.done;
    task.Drop = taskAsJson.drop;
    task.DropDate = DateTime.Parse(taskAsJson.dropDate!);
    task.CreationDate = DateTime.Parse(taskAsJson.creationDate!);

    _context.Tasks.Update(task);
    var result = await _context.SaveChangesAsync() > 0;
    if (result) return Ok(task);
    return BadRequest(new ProblemDetails { Title = "Problem updating task" });

  }

  [HttpDelete("{id}", Name = "DeleteTask")]
  public async Task<IActionResult> DeleteTask(int id)
  {
    var task = await _context?.Tasks?.SingleOrDefaultAsync(c => c.Id.Equals(id))!;
    if (task == null) return NotFound();

    _context.Tasks.Remove(task);

    var result = await _context.SaveChangesAsync() > 0;
    if (result) return Ok();
    return BadRequest(new ProblemDetails { Title = "Problem deleting task" });


  }

  [HttpGet("late")]
  public async Task<ActionResult<List<Entities.Task>>> GetLateTasks(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    var tasks = await _context?.Tasks?
    .Where(c => c.DueDate.Date <= DateTime.UtcNow.Date)
    .Where(c => !c.Done)
    .Where(c => !c.Drop)

    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .OrderBy(c => c.DueDate)
    .ToListAsync()!;
    if (tasks == null) return NotFound();
    return tasks;
  }

  [HttpGet("late_count")]
  public async Task<ActionResult<int>> GetLateTaskCount(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    return await _context?.Tasks?
    .Where(c => c.DueDate.Date <= DateTime.UtcNow.Date)
    .Where(c => !c.Done)
    .Where(c => !c.Drop)

    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .CountAsync()!;
  }


  [HttpGet("due")]
  public async Task<ActionResult<List<Entities.Task>>> GetDueTasks(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    var tasks = await _context?.Tasks?
    .Where(c => c.DueDate.Date == DateTime.UtcNow.Date)
    .Where(c => !c.Done)
    .Where(c => !c.Drop)

    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

   .OrderBy(c => c.DueDate)
    .ToListAsync()!;
    if (tasks == null) return NotFound();
    return tasks;
  }


  [HttpGet("due_count")]
  public async Task<ActionResult<int>> GetDueTaskCount(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    return await _context?.Tasks?
    .Where(c => c.DueDate.Date == DateTime.UtcNow.Date)
    .Where(c => !c.Done)
    .Where(c => !c.Drop)

    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .CountAsync()!;
  }


  [HttpGet("soon")]
  public async Task<ActionResult<List<Entities.Task>>> GetSoonTasks(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    var tasks = await _context?.Tasks?
    .Where(c => c.DueDate.Date > DateTime.Now)
    .Where(c => c.DueDate.Date < DateTime.Today.AddDays(2))
    .Where(c => !c.Done)
    .Where(c => !c.Drop)

    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .OrderBy(c => c.DueDate)
    .ToListAsync()!;
    if (tasks == null) return NotFound();
    return tasks;
  }


  [HttpGet("soon_count")]
  public async Task<ActionResult<int>> GetSoonTaskCount(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    return await _context?.Tasks?
    .Where(c => c.DueDate.Date > DateTime.Now)
    .Where(c => c.DueDate.Date < DateTime.Today.AddDays(2))
    .Where(c => !c.Done)
    .Where(c => !c.Drop)

    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .CountAsync()!;
  }

  [HttpGet("later")]
  public async Task<ActionResult<List<Entities.Task>>> GetLaterTasks(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    var tasks = await _context?.Tasks?
    .Where(c => c.DueDate.Date >= DateTime.Today.AddDays(2))
    .Where(c => !c.Done)
    .Where(c => !c.Drop)

    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .OrderBy(c => c.DueDate)
    .ToListAsync()!;
    if (tasks == null) return NotFound();
    return tasks;
  }

  [HttpGet("done")]
  public async Task<ActionResult<List<Entities.Task>>> GetDoneTasks(
      [FromQuery] string? flagFilter = "on_or_off",
      [FromQuery] string? doneFilter = "on_or_off",
      [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    var tasks = await _context?.Tasks?
    .Where(c => c.Done)
    .Where(c => !c.Drop)

    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .OrderBy(c => c.DueDate)
    .ToListAsync()!;
    if (tasks == null) return NotFound();
    return tasks;
  }

  [HttpGet("drop")]
  public async Task<ActionResult<List<Entities.Task>>> GetDroppedTasks(
    [FromQuery] string? flagFilter = "on_or_off",
    [FromQuery] string? doneFilter = "on_or_off",
    [FromQuery] string? bellFilter = "on_or_off"
  )
  {
    var tasks = await _context?.Tasks?
    .Where(c => c.Drop)

    .Where(flagFilter == "on" ? c => c.Flag : flagFilter == "off" ? c => !c.Flag : c => c.Flag || !c.Flag)
    .Where(doneFilter == "on" ? c => c.Done : doneFilter == "off" ? c => !c.Done : c => c.Done || !c.Done)
    .Where(bellFilter == "on" ? c => c.BellType != "--" : bellFilter == "off" ? c => c.BellType == "--" : c => c.BellType == "--" || c.BellType != "--")

    .OrderByDescending(c => c.Drop)
    .ToListAsync()!;
    if (tasks == null) return NotFound();
    return tasks;
  }

}