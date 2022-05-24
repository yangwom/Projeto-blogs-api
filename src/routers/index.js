const express = require('express');
const routerBlogPost = require('./blogPost');
const routerCategory = require('./category');
const routerLogin = require('./login');
const routerUser = require('./user');

const router = express.Router();

router.use('/login', routerLogin);
router.use('/user', routerUser);
router.use('/categories', routerCategory);
router.use('/blogPost', routerBlogPost);

module.exports = router;