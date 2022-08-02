using Globals;

namespace API.Entities
{
  public class Task
  {
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTime DueDate { get; set; }
    public ScheduleStatus? ScheduleStatus { get; set; }
    public Boolean ReminderSet { get; set; }
    public DateTime FirstReminderDateTime { get; set; }
    public int ReminderIntervalCount { get; set; }
    public TimeUnits? ReminderIntervalUnits { get; set; }
    public int TailCount { get; set; }
    public TimeUnits? TailUnits { get; set; }
    public string? ImageUrl { get; set; }
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
  }
}