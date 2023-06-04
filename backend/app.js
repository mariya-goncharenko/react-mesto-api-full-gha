const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
// const cors = require('cors');
const limiter = require('./middlewares/rateLimiter');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('./middlewares/cors');
const config = require('./config');
const { logger, requestLoggingMiddleware } = require('./middlewares/logger');
const rootRouter = require('./routes');

mongoose.set('strictQuery', true);
mongoose.connect(config.DB_URL);

const app = express();

// Добавление middleware для логирования запросов
app.use(requestLoggingMiddleware);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Использование CORS:
app.use(cors());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(limiter);
app.use(rootRouter);

app.use(errors());
app.use(errorHandler);

app.listen(config.PORT, () => {
  logger.info(`Сервер запущен на порту ${config.PORT}`);
});
