const express = require('express');

const loginMiddleware = require('../../middleware/loginMiddleware');

const controller = require('../../controllers/loginControllers');

const routerLogin = express.Router();

routerLogin.post('/', loginMiddleware, controller.login);

module.exports = routerLogin;