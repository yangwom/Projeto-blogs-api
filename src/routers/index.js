const express = require('express');
const routerLogin = require('./login');
const routerUser = require('./user');

const router = express.Router();

router.use('/login', routerLogin);
router.use('/', routerUser);

module.exports = router;