const express = require('express');
const { authMiddleware } = require('../../middleware/authMiddleware');
const { postMiddleware, postPut } = require('../../middleware/postMiddleware');
const controllers = require('../../controllers/blogPostController');

const routerBlogPost = express.Router();

routerBlogPost.post('/', authMiddleware, postMiddleware, controllers.create);
routerBlogPost.get('/', authMiddleware, controllers.getAll);
routerBlogPost.get('/search', authMiddleware, controllers.search);
routerBlogPost.get('/:id', authMiddleware, controllers.getById);
routerBlogPost.put('/:id', authMiddleware, postPut, controllers.update);
routerBlogPost.delete('/:id', authMiddleware, controllers.deleted);
module.exports = routerBlogPost;