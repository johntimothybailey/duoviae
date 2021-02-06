# Welcome to Duoviae

A "trivia" game with a focus on true or false choices. The name is from Latin "dou" (two) and "viae" (roads), since the application is going to focus on true or false.

To use the game please check out either `$ yarn android` or `$ yarn ios` after installing the project until it is published on www.expo.io

The following is to help with two types of contributors "nerdy" Users and other Developers / Software Enginers

## Feature or Bug
https://github.com/johntimothybailey/duoviae/issues

## Roadmap and Ideas
For a true existing list please see https://github.com/johntimothybailey/duoviae/issues

Planned features are as follows
- Ability to set "modes" or challenge settings before starting (e.g. difficulty, multiple choice, category selection)
- Access to previous question results with trends (charts)

## Contribution and Development
How to contribute to this project or develop your own from it.

## Design (Technology and Visuals)

### Visuals
Using an Atomic Design approach, [Component Driven Design](https://www.componentdriven.org/), and UI Component Library with UI Kitten.

However, as this was my first time to try out UI Kitten and I am not impressed, I may be switching to RN Paper.

### Extnernal Connections (aka "Services")

Location `app/services`. Please note, I decided to rename this folder to `services` as it is a common trend. However, on projects I manage I often call this `connections`.

Interfaces for connecting to external services and/or systems (e.g. HTTP APIs and Reactotron)

### Localization and Translation

### Navigation

### State Machine
`app/state`

Nearly all state management should be done here using the best practices as described by [Redux's Style Guide]()

One thing to note, due to wanting to experiment with `useSelector` I am **currently** recklessly using it and need implement guidance from [Usage Warnings](https://react-redux.js.org/api/hooks#usage-warnings) and most likely return to `connect`

### Components
Should not rely on from State Machine Proviers and other such larger configurations Providers. Basically, focus these on input and output.

Please take a moment to read over [Component Driven Design](https://www.componentdriven.org/)

Reusable [Molecules](https://atomicdesign.bradfrost.com/chapter-2/#molecules) and [Organisms](https://atomicdesign.bradfrost.com/chapter-2/#organisms) that define the following at minimum:

- `index.tsx` the defining "what's available for consumption" or main component to other components and screens
- `index.test.tsx` test the main or test the parts through other testing files
- `props.ts` tell me what the inputs are to what is exposed or used internally
- `stories.tsx` so we can see use cases in "isolation"
- (optional) `styles.ts` Please note, I am intentionally encouraging not using `styles`. That said, I don't have enough time to to configure UI Kitten's Mappings

### Screens
`app/screens`

Unlike `Components` these should have access to the State Machine. The responsibility of `Screens` is to be the glue between navigation, state machine, and other components.

Additionally, this provide for a playground and "real-life" testing bed for what patterns and components may be promoted to `app/Components` and similar.

### Theme
Where we'll setup and configure overrides and customizations for the theme provided by our UI Library (i.e. UI Kitten)

### Testing and Code Checks
`test` and `app/**/*.test.{ts|tsx|js}`

Testing is done by the standard Jest and supporting TypeScript

Style checks are done via ESLint using StandardJS Configurations with as little alterations as possible.

### Storybook
`storybook` and `app/**/*stories.tsx`

In order to focus teams (all participants) on Atomic Design, Isolations, and [Component Driven Design](https://www.componentdriven.org/), I highly encourage the usage of Storybook.

> If you have problems connecting from your device to Storybook using Android issue the following command: `adb reverse tcp:7007 tcp:7007`.

In terms of Render testing (dom-like testing)
- **Enzyme** for Component isolation testing
- **[React Testing Library](https://callstack.github.io/react-native-testing-library)** for Blackbox / e2e testing

## How It Was Setup

**This is not how to setup the project.** These are the initial setup records / logs. However, this has most likely changed since the initial setup so pleas ask if you have an questions

> TODO: Update these intstructions

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
mkdir app app/screens app/navigation app/state app/theme app/i18n app/services app/components app/translations
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

### Storybook
https://github.com/elderfo/react-native-storybook-loader


## Citations and Credit
The initial direction and requirements for the application is per G2i. [The instructions and requirements are found at their Gist location](https://gist.github.com/severnsc/e09f4f8742b7dd91af9c422d6f210a57)
