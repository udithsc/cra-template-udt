# cra-template-udt

A template bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (CRA) to build applications with **redux**, **eslint**, **pretier** and **stylelint** configurations.

## Usage

```shell script
npx create-react-app %PROJECT_NAME% --template udt
```

`npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

Then

```shell script
cd %PROJECT_NAME%
npm run prepare   # only required before first run
npm start
```

## Features

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Google’s [Material Design](https://material.io) through [Material-UI](https://mui.com).
- Routing with [React Router](https://reactrouter.com)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- [Husky](https://github.com/typicode/husky) for git hooks.
- Find and fix problems in code with [Eslint](https://eslint.org/)
- Format code with [Prettier](https://prettier.io/)
- Avoid errors and enforce conventions in styles with [stylelint](https://stylelint.io/).
- Commit convention made easy with [Commitlint](https://commitlint.js.org/#/)
- [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for unit testing.
- [Cypres](https://www.cypress.io/) for E2E testing
- with below useful utilities
  - [Axios](https://axios-http.com/) - A Promise based HTTP client
  - [Moment](https://momentjs.com/) - A JavaScript date library
  - [JOI](https://joi.dev/) - A Schema based data validator

## Run Scripts

Inside the project directory run using `npm` or `yarn`:

- `start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `test` - launches the test runner in the interactive watch mode.
- `build` - builds the app for production to the `build` folder.
- `eject` - exposes content of `react-script` package
- `lint` - lints project files according to [Airbnb](https://github.com/airbnb/javascript) — as part of their style guide — it provides an ESLint configuration that anyone can use and it is the standard.
- `fix` - fix lints issues according to style guide set.
- `format` - format the code with prettier
- `lint-staged` - fix lints issues according to style guide set.
- `coverage` - create a test coverage report
- `prepare` - enable git hooks

## File Structure

```shell script
├── .husky # git hooks configurations
├── .env # dotenv config file
├── .eslintrc.json # eslint configurations
├── .commitlintrc.json # commitlint config file
├── .lintstagedrc.json # lintstaged configurations
├── .prettierignore # exclude files from formatting
├── .prettierrc.json # prettier configurations
├── .stylelintrc # stylelint configurations
├── Dockerfile
├── .dockerignore
├── nginx.conf # nginx configurations
├── package-lock.json
├── package.json
├── .gitignore
├── jsconfig.json # absolute path configurations
├── README.md # this file
├── public # public assets
└── src
    ├── components # React components folder
    ├── hooks # custom react hooks
    ├── pages
    ├── resources
    ├── store # redux store
    ├── styles
    ├── App.jsx # main component
    ├── data.json # project configurations
    ├── index.css
    ├── index.js # entry point file
    ├── protectedRoute.jsx
    └── setupTests.js # configuration to run jest tests
```

## Git Hooks

[Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are scripts that run automatically every time a particular event occurs in a Git repository. They let you customize Git's internal behavior and trigger customizable actions at key points in the development life cycle.

[Husky](https://github.com/typicode/husky) is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages. It works by including an object right within our package.json file that configures Husky to run the scripts we specify.

In this template we use 2 git hooks

- pre-commit

The pre-commit hook is run first, before you even type in a commit message. Every time you commit something `husky` will run `eslint --fix` command on staged files that configured using [lint-staged](https://github.com/okonet/lint-staged), preventing you from committing badly formatted code. You can change or disable this behavior inside `linstagedrc.json` config file.

- commit-msg

The commit-msg hook is much like the prepare-commit-msg hook, but it’s called after the user enters a commit message. This is an appropriate place to warn developers that their message doesn’t adhere to your team’s standards. In this template uses [Commitlint](https://commitlint.js.org/#/) that lints commit messages and makes sure they follow a set of rules.

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```
fix(server): send cors headers
```

Common types according to [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be build, ci, docs, feat, fix, refactor, revert, style, test

## Code quality tools

Code quality tools provide static check of your code and try to fix errors. Checks are triggered inside pre-commit hook.

### Eslint

ESLint is designed to be flexible and configurable for your use case. You can turn off every rule and run only with basic syntax validation or mix and match the bundled rules and your custom rules to fit the needs of your project. This template use lint set according to [Airbnb](https://github.com/airbnb/javascript) style guide — as part of their style guide with custom set, tailored for reasonable and clean development process.`.eslintrc` file specify configuration information for an entire directory and all of its subdirectories.

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. `.prettierrc` file specify formatting configurations of this template.

### stylelint

Template includes [Stylelint](https://stylelint.io/), to check CSS/SASS/LESS files. It is using [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) rule set. `.stylelintrc` file specify styling configurations of this template.

## State Management

Template provides basic Redux configuration with [Redux Toolkit](https://redux-toolkit.js.org/). You can use [Redux DevTools](https://github.com/reduxjs/redux-devtools) to power-up [Redux](https://redux.js.org/) development workflow or any other architecture which handles the state change

## Routing

Template use [React Router](https://reactrouter.com/docs/en/v6) standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL

## Testing

This template uses [Jest](https://jestjs.io/) JavaScript test runner that lets you access the DOM via jsdom. Jest offers functions for test suites, test cases, and assertions. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) is a set of helpers that let you test React components without relying on their implementation details

### Unit Testing

Unit Testing supported with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) that works with [Jest](https://github.com/facebook/jest). Refer the official docs about [running tests](https://create-react-app.dev/docs/running-tests/) for more information

```
$ npm run test
```

### Coverage

To set coverage this template uses Jest. Jest allow us to create reports in different format and set where we want to collect these reports from (or not collect them from), as well as ensure the coverageThreshold.Coverage report can be open using coverage/lcov-report/index.html file

```
$ npm run coverage
```

### E2E Testing

E2E testing provided by [Cypress](https://www.cypress.io/).

```
$ npm run e2e-test
```

for more information about testing.

- [React Docs](https://reactjs.org/docs/testing.html)
- [Create React App Docs](https://create-react-app.dev/docs/running-tests/)

## Build

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. See the [production build](https://create-react-app.dev/docs/production-build/) section for more information.

```
$ npm run build
```

## Additional Configuration

### Dockerizing a React App

[Docker](https://www.docker.com/) is a containerization tool used to speed up the development and deployment processes. If you’re working with microservices, Docker makes it much easier to link together small, independent services. It also helps to eliminate environment-specific bugs since you can replicate your production environment locally.

```
$ docker build -t frontend .
$ docker run -p 3000:80 -d frontend .
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
