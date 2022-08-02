var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<CycleContext>(opt =>
    {
      opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// database setup
using var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<CycleContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try
{
  await context.Database.MigrateAsync();
  DbInitializer.Initialize(context);
}
catch (Exception ex) { logger.LogError(ex, "Problem migrating data"); }


app.Run();
