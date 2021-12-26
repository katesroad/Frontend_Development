# eslint

## What is eslint

- what is eslint
  - ESLint statically analyzes (js/ts) code to quickly find problems.
  - Many problems ESLint finds can be automatically fixed. 
  - People can utilize eslint to improve code quality and consitency among peoples in a team.

## configure eslint

- Setup eslint for vscode
  - [How To Lint and Format Code with ESLint in Visual Studio Code](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code)

- configure eslint
  - some concepts
    - [env](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)
      - which enviroment your script defined to run at
    - rules: which rules are enabled and at what error level.
    - plugins: which third-party plugins define additional rules, environments, configs, etc. for ESLint to use.
    - extends
    - parser
      - for grammar, sematics checking
      - Some other parsers
        - Esprima
        - @babel/eslint-parser - A wrapper around the Babel parser that makes it compatible with ESLint.
        - @typescript-eslint/parser - A parser that converts TypeScript into an ESTree-compatible form so it can be used in ESLint.
    - parserOptions
      - ESLint allows you to specify the JavaScript language options you want to support.
    - settings: [used to adding shared settings](https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings)
    - eslintIgnore: ignore code/folders
