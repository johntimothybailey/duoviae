# Welcome to Duoviae

A trivia game with a focus on true or false choices. The name is from Latin "dou" (two) and "viae" (roads), since the application is going to focus on true or false.

To use the game please check out either `$ yarn android` or `$ yarn ios` after installing the project until it is published on www.expo.io


## Contribution and Development
How to contribute to this project or develop your own from it.

## Design (Technology and Visuals)

### Visuals
Using an Atomic Design approach and proven UI Component Library with UI Kitten.

### Extnernal Connections

Location `app/connections`

Interfaces for connecting to external services and/or systems (e.g. HTTP APIs and Reactotron)

### Localization and Translation

### Navigation

### State Machine

### Components

### Screens

### Theme

### Testing and Code Checks

## How It Was Setup

These are the initial setup records / logs

### Basics
```
$ expo init duoviae
$ cd duoviae
$ yarn add @ui-kitten/components @eva-design/eva
$ expo install react-native-svg@9.13.6
```

### Code Style Checks (aka "Linting")
```
$ yarn add -D eslint@7 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@4 eslint-config-standard-with-typescript
$ yarn add -D @babel/preset-typescript eslint-config-standard-jsx
$ touch .eslintignore && echo "node_modules" >> .eslintignore
$ touch .prettierignore && echo "node_modules" >> .prettierignore
$ touch .eslintrc
```

- Added content to `.eslintrc` and `package.json` via instructions from [eslint-config-standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript).
- Added `"standard-jsx"` to `.eslintrc` to `"extends"` array

```
$ yarn lint:fix
```

### Directories
```
mkdir app app/screens app/navigation app/state app/theme app/i18n app/connections app/components
```

Please see the Design section above for details

### Navigation

```
yarn add @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
````

Screens will leverage the internals of [https://reactnavigation.org/docs/handling-safe-area/](https://reactnavigation.org/docs/handling-safe-area/)

### Localization

Used [Expo Localization](https://docs.expo.io/versions/latest/sdk/localization/)

```
$ expo install expo-localization
```

However, to get more feature rich, I decided to go with [React-i18Next](https://react.i18next.com/)

### Testing

```
$  yarn add -D jest @types/jest @babel/preset-typescript babel-jest @babel/core @babel/preset-env
```


## Citations and Credit
The initial direction and requirements for the application is per G2i. [The instructions and requirements are found at their Gist location](https://gist.github.com/severnsc/e09f4f8742b7dd91af9c422d6f210a57)
