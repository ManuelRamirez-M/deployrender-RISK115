const Router = require('koa-router');

const router = new Router();
const turnController = require('../controllers/turn');

// General
router.get('/actions/:playerId', turnController.getAvailableActions)
router.get('/territory/:id', turnController.getStateOfTerritory);
router.get('/territories/:playerId', turnController.getPlayerTerritories);

router.get('/attacks/:territoryId', turnController.getPossibleAttacks);

// Turn Actions
router.post('/:turnId/reinforce', turnController.buildArmy);
router.post('/:turnId/attack', turnController.resolveAttack);
router.post('/:turnId/pass', turnController.passTurn);

module.exports = router;