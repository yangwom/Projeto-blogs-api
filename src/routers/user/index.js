const express = require('express');
const controller = require('../../controllers/userControllers');
const { authMiddleware } = require('../../middleware/authMiddleware');
const { 
displayMiddleware, 
emailMiddleware, 
passwordMiddleware,
} = require('../../middleware/userMiddleware');

const routerUser = express.Router();

routerUser.post('/', 
displayMiddleware, 
emailMiddleware, 
passwordMiddleware,
controller.userCreated);

routerUser.get('/', authMiddleware, controller.getAll);
routerUser.get('/:id', authMiddleware, controller.getById);
routerUser.delete('/me', authMiddleware, controller.deleted);

module.exports = routerUser;