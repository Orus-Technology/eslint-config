# Orus Tecnologia Eslint-config
ESLint configuration used by Orus Technology

## Whats is include in this project?
- Eslint standard configuration;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;'
- Prettier standard plugin configuration;
- Tailwindcss prettier plugin;

## How to setup

### React (using Next.JS)
Install dependencies
```
npm i -D eslint @orustecnologia/eslint-config
```
Set inside of `.eslintrc.json` file:
```
{
  "extendes": [
    "@orustecnologia/eslint-config/next",
    "next/core-web-vitals"
  ]
}
```
> You can also use a `.eslintrc.js` instead of JSON if you prefer.

### React (without Next.JS)
Install dependencies
```
npm i -D eslint @orustecnologia/eslint-config
```
Set inside of `.eslintrc.json` file:
```
{
  "extendes": [
    "@orustecnologia/eslint-config/react"
  ]
}
```
> You can also use a `.eslintrc.js` instead of JSON if you prefer.

### Node.JS
Install dependencies
```
npm i -D eslint @orustecnologia/eslint-config
```
Set inside of `.eslintrc.json` file:
```
{
  "extendes": [
    "@orustecnologia/eslint-config/node"
  ]
}
```
> You can also use a `.eslintrc.js` instead of JSON if you prefer.

# Additional information

You can set others rules and preferences of eslint and prettier configuration in `.eslintrc.json` to customize the output of the `eslint` command.

## License Agreement
