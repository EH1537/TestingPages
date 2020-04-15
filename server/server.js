const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(path.join(__dirname, '../dist'))

app.use("/", express.static(path.join(__dirname , '../dist')))
/** 
 * define route handlers
 */
// app.use('/api', apiRouter);

// respond with main app


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;