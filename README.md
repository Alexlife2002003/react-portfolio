# Getting Started with Create React App
# run this before
export NODE_OPTIONS=--openssl-legacy-provider

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### `npm install react-scripts --save`

Installs the dependancy react-scripts


``
## deploy on github
### Step 1: Install gh-pages 
`npm install --save-dev gh-pages
`
### Step 2: update package.json
`"homepage": "https://<username>.github.io/<repository-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
}`

### Step 3: Deploy to GitHub Pages
`npm run deploy`
This script will build your React app and publish it to the gh-pages branch of your GitHub repository.

