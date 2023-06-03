const { config } = require('dotenv');

const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
  config();
}

const PORT = 3000; // Порт сервера
const DB_URL = 'mongodb://127.0.0.1:27017/mestodb'; // URL базы данных
const { SECRET_SIGNING_KEY = 'dev-secret' } = process.env;// Секретный ключ подписи
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/; // Регулярное выражение для URL

module.exports = {
  PORT,
  DB_URL,
  SECRET_SIGNING_KEY,
  URL_REGEX,
  NODE_ENV,
};
