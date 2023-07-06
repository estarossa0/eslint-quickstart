# Eslint quicksetup

`eslint-quicksetup` is an Eslint configuration for Nextjs selected by me, after getting tired of copying my preferred eslint rules each new project I decided to just group them as a package and maintain them better.

## Installation

You can install `eslint-quicksetup` using your preferred package manager:

```bash
npm install -D @estarossa/eslint-quicksetup
```

or

```bash
yarn add -D @estarossa/eslint-quicksetup
```

or

```bash
pnpm add -D @estarossa/eslint-quicksetup
```

## Usage

Create a file named `.eslintrc.js` in your root folder and copy the following configuration.

```javascript
// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('@estarossa/eslint-quicksetup/config')],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

## Integration

`eslint-quicksetup` can be seamlessly integrated with Vscode, Although you may need to setup its settings:

1. Create a folder names `.vscode` in your workspace root.
2. Create a file inside it named `settings.json`
3. Paste the following settings:

   ```json
   {
     "[css]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[javascript]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     },
     "[javascriptreact]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     },
     "[typescript]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     },
     "[typescriptreact]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     },
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ]
   }
   ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

`eslint-quicksetup` is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

##

Happy coding!
