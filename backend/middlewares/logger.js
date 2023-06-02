const winston = require('winston');
const expressWinston = require('express-winston');

// Создание экземпляра логгера
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(), // Для вывода логов в консоль
    new winston.transports.File({ filename: 'request.log' }), // Для сохранения логов в файле
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

// Middleware для логирования запросов
const requestLoggingMiddleware = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'request.log' }), // Для сохранения логов в файле
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

module.exports = {
  logger,
  requestLoggingMiddleware,
};
