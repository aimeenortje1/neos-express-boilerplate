# Neos boilerplate for ExpressJS/ReactJS projects

It is a boilerplate to quickly get started with your ExpressJS/ReactJS project. It comes with Mocha/Chai for backend testing and ESlint to lint your files. It uses *nodemon* to automatically restart the backend server if the files changed.

## Development mode

- Run `npm start` in the `server/` directory to start the backend server.
- Run `npm start` in the `client/` directory to start the frontend app. All [non-HTML requests](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development) not handled by the React app will be proxied to the backend server.
- Check the browser's console for log line `GET /api/hello: Hello World` to validate that your set up is working.
- Use `npm test` to run the backend tests.
- Use `npm run lint` will analyse your code.

## Production mode

- Run `npm run build` in the `client/` directory to generate the frontend build artifacts.
- Run `NODE_ENV=production npm start` in the `server/` directory to start the backend service. It will also serve static assets. All routes not handled by ExpressJS will be redirected to the React app.
