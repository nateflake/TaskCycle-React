using Globals;

namespace API.Data
{
  public static class DbInitializer
  {
    public static void Initialize(CycleContext context)
    {
      if (context.Tasks != null && context.Tasks.Any()) return;

      var tasks = new List<API.Entities.Task>
      {
        new Entities.Task
        {
          Title ="Weekly Shopping",
          Description ="Go to Kroger and get •milk •eggs •cheese • bread",
          DueDate = new DateTime(2023, 5, 2, 16, 30, 0),
          ReminderSet = true,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Pick Up Julie",
          Description ="from violin practice",
          DueDate = new DateTime(2023, 5, 3, 16, 30, 0),
          ReminderSet = true,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Take Over The World",
          Description ="because why not",
          DueDate = new DateTime(2023, 5, 4, 16, 30, 0),
          ReminderSet = true,
          CreationDate = DateTime.UtcNow
        }
      };

      foreach (var task in tasks)
      {
        context?.Tasks?.Add(task);
      }

      context.SaveChanges();
    }
  }
}