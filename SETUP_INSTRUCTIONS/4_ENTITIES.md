## SETUP ENTITIES & ENTITY AGGREGATES
> create entities & aggregates in Entities folder

## ENTITY FRAMEWORK (EF)
• DbContext class: opens db connection as session
  e.g.: 
    var products = context.Products.ToList()
    •••> select * from Products
• Queries DbSet(s) (tables) using linq queries
• Objects ⇄ Object/Relational Mapper ⇄ Relational Data
Features
  - Modeling
  - Querying
  - Change Tracking
  - Saving
  - Concurrency
  - Transactions
  - Caching
  - Built-in conventions
  - Configurations
  - Migrations

## NECESSARY PACKAGES (froom NuGet)
-Microsoft.EntityFrameworkCore.Sqlite
-Microsoft.EntityFrameworkCore.Design (for migrations)

## CREATE DATA FOLDER AND STORECONTEXT CLASS
> In API folder
  - create Data folder to hold anything related to data tables
  > In Data folder
    - create StoreContext.cs
      1. create StoreContext (derived from DbContext)
          public class StoreContext : DbContext
      2. create DbSet (will represent data table, and type will be an entity)

## ADD DBCONTEXT AS STORECONTEXT TO BUILDER (Program.cs)
> In Program.cs
  > Before: var app = builder.Build();
    builder.Services.AddDbContext<StoreContext>(opt =>
    {
      ... connection code ...
    });

## PERFORM MIGRATION
1. Get Nuget-ef
  > on web
    - search for:
      dotnet NuGet-ef
      > on nuget.org website (nuget-ef page)
        copy dotnet code for installing
  > In terminal (API folder)
    - paste installation code;
        dotnet tool install --global dotnet-ef --version 6.0.7
2. Perform Migration
  > In terminal (API folder)
      dotnet ef migrations add <migration name> -o <destination folder>
      [dotnet ef migrations add InitialCreate -o Data/Migrations]

## CREATE/UPDATE DB
> In terminal (API folder)
    dotnet ef database update

## OPEN SQLITE
> In command pallette (shift + command + p)
    SQLite: Open Database
    >> SQLITE EXPLORER will appear at bottom of VsCode Explorer window (left-hand menu)

## CREATE SEED DATA (and logger)
> In Data folder
  - create c# class:
    DbInitializer.cs
  - activate in Program.cs
  > After controllers & before app.Run() :
        using var scope = app.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<CycleContext>();
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        try
        {
          await context.Database.MigrateAsync();
          DbInitializer.Initialize(context);
        }
        catch (Exception ex)  { logger.LogError(ex, "Problem migrating data"); }

## RE-DO DB WITH NEW DATA        
    -1. Manually delete Migration folder (with all contents)
    -2. drop old db
        > In terminal (API folder)
            dotnet ef database drop
    -3. re-run migration
        (see instructions in migration section above)
    -4. update db
        (see inscructions in create/update db above)
    -4. run db initializer code (in Program.cs)
        dotnet watch run
    ** initializer runs when app starts **
    ** logger needed because this is upstream of the exception page **
    ** use "using" keyword with scope so that the var contents get procssed by garbage collection automatically **

## HIDE DB & DB FILES
> In Code > Preferences > Settings:
  - search for 
    "exclude"
  - add patterns:
      **/API/<db name>.db-shm
        (in this project:**/API/cycles.db-shm)
      **/API/<db name>.db-wal
        (in this project:**/API/cycles.db-wal)
## ADD DB & DB FILES TO GITIGNORE
> In .gitignore
  - add files:
      API/cycles.db
      API/cycles.db-shm
      API/cycles.db-wal
  - (alternatively) rightclick on filees and select "add to gitignore"