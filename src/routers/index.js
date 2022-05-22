const express = require('express');
const routerLogin = require('./login');

const router = express.Router();

router.use('/login', routerLogin);

module.exports = router;