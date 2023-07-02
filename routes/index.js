const Router = require('koa-router');
const game = require('./game');
const turn = require('./turn');
const auth = require('./authentication');
const jwtMiddleware = require('koa-jwt')
require('dotenv').config({ path: '../.env' });




// const serve = require('koa-static');

const router = new Router();

router.use('/turn', turn.routes());
router.use('/', auth.routes());
router.use('/', game.routes());


// RUTAS Q REQUIEREN JWT AQUI ABAJO
router.use(jwtMiddleware( { secret: process.env.JWT_SECRET } ))

/*
// Serve static files from the 'frontend' directory
router.use(serve(path.join(__dirname, '../../frontend')));
*/

module.exports = router;
