const AppError = require('../utils/appError');

const sendErrorProd = (err, req, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    return;
  }
  // Programing or other unknown error: don't leak error detail
  console.error('Error 💥', err);

  res.status(500).json({
    title: 'error',
    message: 'Something went very wrong',
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  sendErrorProd(err, req, res);
};
