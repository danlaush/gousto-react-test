# Gousto React Test

This applications allows you to find Gousto products by category or search, and click to reveal a description of the item.

## How to use

### Prerequisites:

* `node js` >= 8.12
* `yarn` (you can install it globally by running `npm install -g yarn`)

### Commands:

* `yarn install` - installing dependencies
* `yarn start` - starting the app in dev mode
* `yarn start-windows` - starting the app in dev mode on windows
* `yarn build` - build the production artifacts

### Tests

Tests in this project are run with Cypress. To run the test suite, the application must be running in one terminal process and the test be run in another.

```
# Terminal 1
$ yarn start
```

```
# Terminal 2
$ yarn test
```

## Application structure

- `cypress`: e2e tests
- `src`: the app
  - `components`: smaller bits that fit within a page
  - `pages`: routes (Next.js/Nuxt convention)
  - `redux`: store functionality
  - `utils`: an API helper

## Missing func. requirements

- All tasks completed
- Should include some unit tests as well

## Possible improvements/functionality

- Accessibility considerations
  - Router (`reach-router`)
  - ARIA Live region for announcing dynamic content
- Some design would be good
