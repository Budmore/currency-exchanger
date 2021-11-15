# Exchnager - Currency exchange

## Technology stack

- [Lerna]https://github.com/lerna/lerna) Monorepo manager
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

- [`nvm`](https://github.com/creationix/nvm#installation) Node Version Manager
- Create `./packages/webapp/.env` file and fill [`FOREX_API_KEY`](https://polygon.io)
- `yarn` Yarn Workspaces managing dependencies from multiple package. json

## Install dependencies

- `nvm install` / `nvm use`
- `yarn` / `yarn install`

---

### TODO

**@exchanger/root**

- [ ] Fix: absolute paths doesn't work
- [ ] Add i18n

**@exchanger/webapp:**

- [x] Vault Store
  - [x] Unit test
  - [x] Initial balance
- [x] Forex request https://docs.openexchangerates.org/docs/convert
  - [x] fix query caching
- [x] Submit action (update wallets)
- [ ] Currency Selector
- [x] useDirection hook
- [ ] Toggle Direction icon
- [x] Ratio component
- [ ] Success Message
- [ ] RWD
- [x] Update README.md file
- [x] Add .env files
- [ ] \<InputValue /> Emulate caret position

**@exchanger/shared:**

- [ ] Add Jest @exchanger/shared
- [ ] Add eslint @exchanger/shared
- [ ] Add storybook @exchanger/shared
