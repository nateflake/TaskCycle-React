## ADD CORS
> In Program.cs
  - #1 set up
    AT TOP:
      ADD:
        var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


    BEFORE:
    var app = builder.Build();

      ADD:
        builder.Services.AddCors(options =>
        {
          options.AddPolicy(name: MyAllowSpecificOrigins,
          policy =>
          {
            policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod().
            AllowCredentials();
          });
        });


  - #2 add
  AFTER:
    app.UseRouting();

  AND BEFORE:
    app.UseAuthorization();

    ADD:
      app.UseCors(MyAllowSpecificOrigins);

