
const Router = require('koa-router');

const router = new Router();
const gameController = require('../controllers/game');

// adds a user to a game
router.post('/joingame', gameController.joinGame);

router.get('/leftinfobar', gameController.getLeftInfobar);

router.get('/rightinfobar', gameController.getRightInfobar);

router.post('/selectterritory', gameController.selectTerritory);

router.get('/updateboard', gameController.updateBoard);

router.get('/playerinfo', gameController.inGamePlayerInfo);

router.post('/addsoldier', gameController.addSoldier);

router.post('/attack', gameController.attack);









module.exports = router;