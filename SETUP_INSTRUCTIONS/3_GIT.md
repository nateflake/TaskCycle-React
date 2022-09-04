## INITIALIZE GIT
> In terminal
  > from solution folder
    git init

## CREATE GITIGNORE
> In terminal
  > from solution folder
    dotnet new gitignore
  ** this will automatically hide most unnecessary files **
> In .gitignore file
  - go to bottom
  - add ...
    API/appSettings.json
> (alternatively) rightclick on appSettings.json and select "add to gitignore"

## COMMIT
> In terminal (solution folder)
  - state changes
    git add .
    ** stages all changed files **
  - perform commit
    git commit -m "<commit message>"
  - undo commit (if errors before pushing to remote)
    git update-ref -d HEAD
