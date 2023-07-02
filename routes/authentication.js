
const Router = require('koa-router');
var jwt = require('jsonwebtoken');

const router = new Router();
const authController = require('../controllers/authentication');

// handle signup 
router.post('/signup', authController.signUp);

// handle logiin
router.post('/login', authController.login);

module.exports = router; 