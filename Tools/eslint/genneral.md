# Some frequently used rules/plugins/extension 

**About**: Collecting some eslint & [tslint](https://palantir.github.io/tslint/) rules 

- React

  - react-hooks
    - Install
  ```sh
  npm install eslint-plugin-react-hooks --save-dev
  ```
    - Eslint config
  ```js
  // Your ESLint configuration
    {
      "plugins": [
        // ...
        "react-hooks"
      ],
      "rules": {
        // ...
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
      }
    }
  ```
    - Reference: [react hooks rules](https://reactjs.org/docs/hooks-rules.html)