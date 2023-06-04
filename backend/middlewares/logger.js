const expressWinston = require('express-winston');
const winston = require('winston');

const errorLoggerMiddlewere = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: 'error.log' }),
  ],
  format: winston.format.json(),
});

const requestLoggerMiddlewere = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'request.log' }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLoggerMiddlewere,
  errorLoggerMiddlewere,
};
