
using Globals;

namespace API.Entities
{
  public class TaskAsJson
  {
    public int id { get; set; }
    public string? title { get; set; }
    public string? text { get; set; }
    public string? dueDate { get; set; }
    public string? dueTime { get; set; }
    public string? bellType { get; set; }
    public string? bellTime { get; set; }
    public bool flag { get; set; }
    public bool done { get; set; }
    public bool drop { get; set; }
    public string? dropDate { get; set; }
    public string? creationDate { get; set; }

  }
}