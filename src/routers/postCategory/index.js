const express = require('express');
const { authMiddleware } = require('../../middleware/authMiddleware');
const categoryMiddleware = require('../../middleware/categoryMiddleware');

const routerPostCategory = express.Router();

routerPostCategory.post('/', authMiddleware, categoryMiddleware);
