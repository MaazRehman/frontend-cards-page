# React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My Approach
The approach is to breakdown into smaller units deliverable . Ideally i would love to do things in increments i.e multiple small PRs however for the sake of this assignment i will be creating one single PR 

#### Functional Requirements
- Create a card component 
- Write test for card component 
- Create a custom hook to fetch the inventory information from api
- Write test for customHook for fetching data
- Create a place holder component for card that assembles all card together 
- Write test for place holder component 
- Write a fallback error handling component
- Write test for fallback component
- Write a loading component 
- Write test for loading component 
- Write a HOC component that injects loading and error handling into CardListing component

#### Tech Improvements

- Add an `.nvmrc` file to switch to recommended version for node by repository owners.
- Create a metric to capture failures and retries . We can use this later for creating alerts and dashboards
- Integrate sentry in the project 
- Move the code from javascript to typescript for better type support , abstraction and readability.
- Add prettier, linter and static validator on pre-commit hook 


#### Backlog for next steps 
- The version of react application is not working on node 18 , some breaking changes are required to migrate to node v18 [More info](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)
- Serve the bundle from orchestration service like ECS , EKS.
- Move the bundle behind cdn.
- Create health dashboards in grafana or honeycomb.
- Create alerts.
- Add a pipeline for CI CD.
- Suggestion to Product : Perhaps add an AB test to validate hypothesis about manual retry with automatic one 


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Pre-Install
The project requires node `v18.18.0` or above
Run in react-app folder
1. `nvm install 18.18.0`
2. `nvm use`


### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
