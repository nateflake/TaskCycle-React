using Globals;

namespace API.Entities
{
  public class Task
  {
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTime DueDate { get; set; }
    public Boolean ReminderSet { get; set; }
    public DateTime CreationDate { get; set; }
  }
}