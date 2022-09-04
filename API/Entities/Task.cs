using Globals;

namespace API.Entities
{
  public class Task
  {
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Text { get; set; }
    public DateTime DueDate { get; set; }
    public string? DueTime { get; set; }
    public string? BellType { get; set; }
    public string? BellTime { get; set; }
    public Boolean Flag { get; set; }
    public Boolean Done { get; set; }
    public Boolean Drop { get; set; }
    public DateTime DropDate { get; set; }
    public DateTime CreationDate { get; set; }
  }
}