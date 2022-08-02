namespace API.Data
{
  public class CycleContext : DbContext
  {
    public CycleContext(DbContextOptions options) : base(options) { }
    public DbSet<Entities.Task>? Tasks { get; set; }
  }
}