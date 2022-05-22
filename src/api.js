const express = require('express');
const router = require('./routers');
const errorMiddleware = require('./middleware/errorMiddleware');

// ...

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
