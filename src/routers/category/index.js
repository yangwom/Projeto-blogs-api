const express = require('express');

const routerCategory = express.Router();

const controller = require('../../controllers/categoryControllers');
const { authMiddleware } = require('../../middleware/authMiddleware');
const nameMiddleware = require('../../middleware/nameMiddleware');

routerCategory.post('/', authMiddleware, nameMiddleware, controller.create);
routerCategory.get('/', authMiddleware, controller.getAll);

module.exports = routerCategory;
