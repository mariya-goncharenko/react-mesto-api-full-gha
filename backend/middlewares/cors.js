/* Попытка сделать через пакет.
const allowedCors = [
  'https://marigoncharenko.nomoredomains.rocks',
  'http://marigoncharenko.nomoredomains.rocks',
  'https://localhost:3000',
  'http://localhost:3001',
];

module.exports = (req, res, next) => {
  // Сохраняем источник запроса в переменную origin
  const { origin } = req.headers;
  // Сохраняем тип запроса (HTTP-метод) в соответствующую переменную
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  res.header('Access-Control-Allow-Credentials', true);
  // Проверяем, что источник запроса есть среди разрешённых
  if (allowedCors.includes(origin)) {
    // Устанавливаем заголовок, который разрешает браузеру запросы с этого источника
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    // Разрешаем кросс-доменные запросы любых типов (по умолчанию)
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    // Разрешаем кросс-доменные запросы с этими заголовками
    res.header('Access-Control-Allow-Headers', requestHeaders);
    // Завершаем обработку запроса и возвращаем результат клиенту
    return res.end();
  }

  return next();
};
*/
