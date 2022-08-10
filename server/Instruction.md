* <h2>Step1:</h2> <h2>Setup Express And GraphQl WIth Typescript</h2>

```
npm install -g typescript
tsc --init

npm install graphql express express-graphql
npm install -D nodemon ts-node @types/express typescript


```

<h2>Step: 2</h2><h3> Setting up our scripts</h3>

```
"scripts": {
    "start": "nodemon --exec ts-node src/index.ts",
}
```
<h2>Step: 3</h2><h3> Add Configuration file for TypeScript, tsconfig.json:</h3>


```
{
    "compilerOptions": {
        "target": "es2018",
        "module": "commonjs",
        "jsx": "preserve",
        "strict": true,
        "esModuleInterop": true,
        "lib": ["es2018", "esnext.asynciterable"]
    },
    "exclude": ["node_modules"]
}
```
We’ll also install another dev dependency called Concurrently, which will allow us to run multiple commands like nodemon to watch file changes and the tsc command to compile the code:

```
npm install -D concurrently nodemon
```
After installing these dev dependencies, update the scripts in the package.json file:
```
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
  }
}
```