// module
const express = require('express');
const cors = require('cors');

// our module
const AppError = require('./utils/appError');
const errorMiddleware = require('./middleware/error');

const projectRouter = require('./routes/projectRoute');
const kmtRouter = require('./routes/kmRoute');

// create app
const app = express();

// middleware
// cors
app.use(cors());
app.options('*', cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/project', projectRouter);
app.use('/api/v1/km', kmtRouter);

// not found url (404)
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// error middleware
app.use(errorMiddleware);

module.exports = app;
