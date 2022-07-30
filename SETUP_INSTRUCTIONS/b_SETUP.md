## CREATE SOLUTION
dotnet new sln

## CREATE WEB API PROJECT
dotnet new webapi -o API

## ADD API FOLDER TO SOLUTION
dotnet sln add API

## RUN
> In Terminal
  > In API folder
    dotnet watch run

## CONFIGURE APP SETTINGS
> In appsettings.Development.json
  - replace...
          "Microsoft.AspNetCore": "Warning"
    with...
          "Microsoft.AspNetCore": "Information"
    ** gives more detail in terminal when running

## CONFIGURE LAUNCH SETTINGS
> In launchSettings.json
  - turn off browser launch by replacing...
          "launchBrowser": true,
    with...
          "launchBrowser": false,

  - turn off https by replacing ...
          "applicationUrl": "https://localhost:7198;http://localhost:5085",
    with...
          "applicationUrl": "http://localhost:5085",

## TURN OFF HTTPS REDIRECT
  > In Program.cs
    comment out:
      // app.UseHttpsRedirection();
  
## HIDE BIN & OBJ FOLDERS
> In Code > Preferences > Settings:
  - search for 
    "exclude"
  - add pattern
    **/bin
- add pattern
    **/obj

