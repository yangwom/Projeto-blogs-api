const express = require('express');
const { authMiddleware } = require('../../middleware/authMiddleware');
const postMiddleware = require('../../middleware/postMiddleware');
const controllers = require('../../controllers/blogPostController');

const routerBlogPost = express.Router();

routerBlogPost.post('/', authMiddleware, postMiddleware, controllers.create);
routerBlogPost.get('/', authMiddleware, controllers.getAll);
// routerBlogPost.get('/:id', authMiddleware, controllers.getById);

module.exports = routerBlogPost;