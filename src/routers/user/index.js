const express = require('express');
const controller = require('../../controllers/userControllers');
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

module.exports = routerUser;