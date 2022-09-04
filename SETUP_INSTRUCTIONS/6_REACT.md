## REACT INTRO
- library; not framework (like Angular)
- Uses State:
  • maintains Virtual DOM
  • only updates parts of Actual DOM that have changed
- Typical add-on components:
  • Material UI (styling framework)
  • Axios (to contact API)
  • Redux (to manage state across comoponents)
  • react-hook-form (to manage forms and their submissions)
  • react-router (for navigation between components, like pages)

## CREATE APP
> in browser:
  - go to
      https://create-react-app.dev/docs/getting-started
  - find "quick start" instructions
    > In Terminal (solution folder):
        npx create-react-app <app name> --template typescript --use-npm
        cd <app name>
        npm start
        ** here, app name = client

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode. View at http://localhost:3000

### `npm test`
Launches the test runner in the interactive watch mode.\

## CREATE PRODUCTION FOLDER
  > in package.json
    > in "scripts"
      - edit "build":
        "build": "BUILD_PATH='../<main folder name>/wwwroot' react-scripts build",
          ** we used API as main folder name - could be anything **
          ** this will cause folder with files to be generated when the following is run in terminal (below)
  > In terminal (main folder)
    - stop npm
    - stop dotnet
    - cd into <react app folder> ("client")
    - run ...
          npm run build

### `npm run build`
Builds the app for production to the `build` folder.\


### `npm run eject`
Removes the single build dependency from your project.
