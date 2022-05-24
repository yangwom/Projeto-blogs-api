const express = require('express');
const { authMiddleware } = require('../../middleware/authMiddleware');
const categoryMiddleware = require('../../middleware/categoryMiddleware');
const controllers = require('../../controllers/blogPostController');

const routerBlogPost = express.Router();

routerBlogPost.post('/', authMiddleware, categoryMiddleware, controllers.create);

module.exports = routerBlogPost;