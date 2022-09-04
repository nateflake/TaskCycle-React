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
          Title = "Task 1",
          Text = "One week ago - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(-7),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = true,
          DropDate = DateTime.UtcNow.AddDays(1),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 2",
          Text ="Two days ago - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(-2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = true,
          Drop = true,
          DropDate = DateTime.UtcNow.AddDays(2),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 3",
          Text ="Yesderday - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(-2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(3),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 4",
          Text ="Today - complete",
          DueDate = DateTime.UtcNow.Date,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(4),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 5",
          Text ="Today - complete",
          DueDate = DateTime.UtcNow.Date,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(5),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 6",
          Text ="Today - complete",
          DueDate = DateTime.UtcNow,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(6),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 7",
          Text ="Today - complete",
          DueDate = DateTime.UtcNow,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(7),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 8",
          Text ="Today - complete",
          DueDate = DateTime.UtcNow.Date,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(8),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 9",
          Text ="Tomorrow - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(9),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 10",
          Text ="Tomorrow - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 11",
          Text ="Today - complete",
          DueDate = DateTime.UtcNow,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 12",
          Text ="Tomorrow - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 13",
          Text ="Tomorrow - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 14",
          Text ="Tomorrow - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 15",
          Text ="Day after tomorrow - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 16",
          Text ="2 days from now - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 17",
          Text ="Two days from now - complete",
          DueDate = DateTime.UtcNow.AddDays(2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 18",
          Text ="Three days from now - complete",
          DueDate = DateTime.UtcNow.Date.AddDays(3),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 19",
          Text ="Three days from now - complete",
          DueDate = DateTime.UtcNow.AddDays(3),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = true,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 20",
          Text ="DELETED 3 days from now  - incomplete",
          DueDate = DateTime.UtcNow.AddDays(3),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = true,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },

// ############################################################################
// ############################################################################
// ###########################  DONE = FALSE  #################################
// ############################################################################
// ############################################################################


        new Entities.Task
        {
          Title ="Task 1b",
          Text ="One week ago - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(-7),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = true,
          DropDate = DateTime.UtcNow.AddDays(1),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 2b",
          Text ="Two days ago - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(-2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = false,
          Drop = true,
          DropDate = DateTime.UtcNow.AddDays(2),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 3b",
          Text ="Day before yesterday - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(-2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(3),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 4b",
          Text ="Today - incomplete",
          DueDate = DateTime.UtcNow.Date,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(4),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 5b",
          Text ="Today - incomplete",
          DueDate = DateTime.UtcNow.Date,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(5),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 6b",
          Text ="Today - incomplete",
          DueDate = DateTime.UtcNow,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(6),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 7b",
          Text ="Today - incomplete",
          DueDate = DateTime.UtcNow,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(7),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 8b",
          Text ="Today - incomplete",
          DueDate = DateTime.UtcNow.Date,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(8),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 9b",
          Text ="Tomorrow - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow.AddDays(9),
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 10b",
          Text ="Tomorrow  - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 11b",
          Text ="Today - incomplete",
          DueDate = DateTime.UtcNow,
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 12b",
          Text ="Tomorrow  - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 13b",
          Text ="Tomorrow  - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 14b",
          Text ="Tomorrow - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(1),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 15b",
          Text ="Day after tomorrow - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 16b",
          Text ="2 days from now - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = false,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 17b",
          Text ="48 hours from now - incomplete",
          DueDate = DateTime.UtcNow.AddDays(2),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 18b",
          Text ="Three days from now - incomplete",
          DueDate = DateTime.UtcNow.Date.AddDays(3),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 19b",
          Text ="3 days from now  - incomplete",
          DueDate = DateTime.UtcNow.AddDays(3),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = false,
          DropDate = DateTime.UtcNow,
          CreationDate = DateTime.UtcNow
        },
        new Entities.Task
        {
          Title ="Task 20b",
          Text ="DELETED 3 days from now  - incomplete",
          DueDate = DateTime.UtcNow.AddDays(3),
          DueTime= "--:-- --",
          BellType = "email",
          BellTime = "5 mins",
          Flag = true,
          Done = false,
          Drop = true,
          DropDate = DateTime.UtcNow,
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