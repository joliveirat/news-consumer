# News Consumer

This project is using

- [Create React App](https://github.com/facebook/create-react-app), to bootstrap
- [Style Dictionary](https://amzn.github.io/style-dictionary), to generate cross-platform variables with design tokens

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\

_Don't forget to run `cp .env.example .env`_\
You'll need to [generate a Google News API key](https://newsapi.org/s/google-news-br-api)

### `npm run build:style`

Builds Style Dictionary files according to `/style-dictionary/config.json`.\
You should run that if you change any file on `/style-dictionary/properties` folder, which contains all design tokens.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
