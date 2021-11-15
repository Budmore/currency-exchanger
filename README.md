# Exchanger - Currency exchange

![App preview](./public/app-preview.gif)

## Technology stack

- [Lerna](https://github.com/lerna/lerna) Monorepo manager
- [React](https://reactnative.dev/) JavaScript framework for writing mobile apps for iOS and Android
- [React-query](https://react-query.tanstack.com/) Server state.
- [Styled components](https://styled-components.com/) CSS styling react components
- [Jest](http://jestjs.io/) JavaScript testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) Rendering react components for unit tests
- [Prettier](https://prettier.io) Code styling
- [ESlint](https://eslint.org) JavaScript linter
- [Webpack](https://webpack.js.org/) Webpack is a static module bundler.
- [TypeScript](https://www.typescriptlang.org/) TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## Prerequisites

- [`nvm`](https://github.com/creationix/nvm#installation)
- [`yarn`](https://yarnpkg.com/en/docs/install)
- `cp ./packages/webapp/.env.exmaple ./packages/webapp/.env` Create local .env file
- [Get your FOREX_API_KEY](https://polygon.io) and paste it to the `.env`

## Start development

- `nvm use`
- `yarn`
- `yarn start`
- Open a browser on [http://localhost:8080](http://localhost:8080)

---

### TODO

**@exchanger/root**

- [ ] Add i18n
- [ ] Fix: Absolute paths doesn't work
- [ ] Fix: Jest config (issue with .svg files)

**@exchanger/webapp:**

- [x] Vault Store
  - [x] Unit test
  - [x] Initial balance
- [x] Forex request https://docs.openexchangerates.org/docs/convert
  - [x] fix query caching
- [x] Submit action (update wallets)
- [x] Currency Selector
- [x] useDirection hook
- [x] Toggle Direction icon
- [x] Fix: recalculate value on the ratio change
- [x] Ratio component
- [ ] Success Message
- [x] RWD
- [x] Update README.md file
- [x] Add .env files
- [ ] \<InputValue /> Emulate caret position
- [ ] Refactor and Simplifying \<Exchange /> components
- [ ] Create a new wallet on currency selection
- [ ] Increase test coverage

**@exchanger/shared:**

- [ ] Add Jest @exchanger/shared
- [ ] Add eslint @exchanger/shared
- [ ] Add storybook @exchanger/shared
