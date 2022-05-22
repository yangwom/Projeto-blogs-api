const express = require('express');

const loginMiddleware = require('../../middleware/loginMiddleware');

const routerLogin = express.Router();

routerLogin.post('/', loginMiddleware);

module.exports = routerLogin;