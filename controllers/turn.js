const db = require('../models');
const { tankStrenght, trooperStrenght } = require('../parameters/params');
const {Territory, Player, Turn, Border, Game} = db

// GET /actions/:playerId
const getAvailableActions = async (ctx) => {
  const player = await Player.findOne({
    where: {id: ctx.params.playerId},
    include: { model: Game, attributes: ['current_turn'],},
  });

  if (!player) {
    ctx.throw(404, 'Player not found');
    return;
  }

  const currentTurn = await Turn.findOne({
    where: {
      id: player.Game.current_turn,
      playerId: player.id,
    },
  });

  if (!currentTurn) {
    ctx.body = JSON.stringify({ actions: false});
  } else {
    ctx.body = JSON.stringify({ actions: true });
  }
};

// GET /turn/territory/:id
const getStateOfTerritory = async (ctx) => {
  const territoryId = ctx.params.id;

  const requestedTerritory = await Territory.findOne({
    where: {id: territoryId,},
    include: { model: Player, attributes: ['color'],},
  });

  if (!requestedTerritory) {
    ctx.throw(404, 'Territory not found');
    return;
  }

  const info = {
    name: requestedTerritory.name,
    color: requestedTerritory.Player.color,
    strength: requestedTerritory.troops,
    resource: requestedTerritory.resource,
  };

  ctx.body = JSON.stringify(info);
};

// GET /territories/:playerId
const getPlayerTerritories = async (ctx) => {
  const playerId = ctx.params.playerId;

  const territoriesOwned = await Territory.findAll({
    where: {currentOwner: playerId,},
  });
  
  if (!territoriesOwned) {
    ctx.throw(404, 'Territory not found');
    //implement player lose here
    return;
  };

  ctx.body = JSON.stringify(territoriesOwned);
};

// POST /:turnId/reinforce
const buildArmy = async (ctx) => {
  try {
    const turnId = ctx.params.turnId;
    const data = ctx.request.body;
    const soldiers = parseInt(data.recruits.soldiers);
    const tanks = parseInt(data.recruits.tanks);
  
    const strength = soldiers * trooperStrenght + tanks * tankStrenght;
    const oilCost = tanks;
    const ironCost = soldiers + tanks * 2;
    const wheatCost = soldiers;
  
    const currentTurn = await Turn.findOne({
      where: {id: turnId},
      include: { model: Player, attributes: ['id'],},
    });
    
    const reinforcedTerritory = await Territory.findOne({
      where: {id: data.territoryId},
      include: { model: Player, attributes: ['id'],},
    });
  
    if (!reinforcedTerritory || !currentTurn){
      ctx.throw(404, 'Turn or Territory not found');
      return;
    }
    
    const currentPlayer = await Player.findOne({
      where: {id: currentTurn.Player.id}});
  
    if ( !currentPlayer || reinforcedTerritory.Player.id != currentTurn.playerId){
      ctx.throw(404, 'Player not found');
      return;
    }

    console.log("the strength: " + strength);
    await reinforcedTerritory.increment({'troops': strength});
  
    const reinforcer = await currentPlayer.decrement({
      'oil': oilCost, 'wheat': wheatCost, "iron": ironCost});
  
    const updatedOrders = await Turn.update({ 
      recruitedTroops: strength,
      reinforced_territory: reinforcedTerritory.id,}, 
      { where: {id: currentTurn.id},
    });
  
    const info = {
      army: reinforcedTerritory.troops, 
      player: reinforcer,
      turn: updatedOrders,
    };
  
    ctx.body = JSON.stringify(info); 
  } catch (error) {
    console.log(error);
    ctx.body = JSON.stringify(error); 
  }
};

// GET /attack/:territoryId
const getPossibleAttacks = async (ctx) => {
  //const baseTerritory = ctx.params.territoryId;

  const enemyIds  = await Border.findAll({
    where: {
      territory_id: ctx.params.territoryId},
    attributes: ['neighboring_territory_id']
  });

  ctx.body = JSON.stringify(enemyIds); 
};

// POST /:turnId/attack
const resolveAttack = async (ctx) => {
  const data = ctx.request.body;
  const {defendingTerritoryId, attackingTerritoryId}= data.attack; 

  const defendingTerritory = await Territory.findOne({ where: { id: defendingTerritoryId,}});

  const attackingTerritory = await Territory.findOne({ where: { id: attackingTerritoryId,}});

  const currrentTurn = await Turn.findOne({where: { id: ctx.params.turnId,}});

  const border = await Border.findOne({
    where: {
      territory_id: attackingTerritoryId,
      neighboring_territory_id: defendingTerritoryId,
  }});

  if (!defendingTerritory || !attackingTerritory || !currrentTurn){
    ctx.throw(404, 'Resource not found');
  }
  if (defendingTerritory.currentOwner == attackingTerritory.currentOwner || !border){
    ctx.throw(400, 'Unable to attack');
  }

  const strengthDif = attackingTerritory.troops - defendingTerritory.troops;
  let probability = (strengthDif) / 3.45 < 0 ? 0.05 : (strengthDif) / 3.45;
  probability = probability == 0 ? 0.15 : probability;

  const random = Math.random();
  let attackResult = "";
  let loss = 0;
  if (random <= probability){
    // attacker and defender may lose troops
    loss = Math.floor(2 * Math.random());
    let defendedTroops = defendingTerritory.troops - Math.floor(strengthDif * Math.random());
    defendedTroops = defendedTroops <= 1 ? 1: defendedTroops;

    await attackingTerritory.decrement({'troops': loss});
    await defendingTerritory.update({ 
      troops: defendedTroops,
      currentOwner: attackingTerritory.currentOwner,
    });
    // change territory owner
    attackResult = "conquest";
  } else {
    // attacker loses troops
    loss = Math.floor((strengthDif/2) * Math.random()) + 1;
    console.log(loss);
    await attackingTerritory.decrement({'troops': loss});
    attackResult = "defense";
  }
  const turnUpdate = await currrentTurn.update({
    attacking_territory: attackingTerritoryId,
    attacked_territory: defendingTerritoryId,
    result_of_attack: attackResult,
  });
  ctx.body = JSON.stringify({ result: turnUpdate.result_of_attack, loss: loss});
};

// POST /:turnId/pass
const passTurn = async (ctx) => {
  const currentTurn = await Turn.findOne({where: { id: ctx.params.turnId,}});
  const game = await Game.findOne({where: { id: currentTurn.gameId}});

  if (game.current_turn != currentTurn.id) {
    ctx.throw(400, 'Unable to finish turn');
  }

  const turnsToPass = await checkNextPlayer(currentTurn);
  await game.increment({'current_turn': turnsToPass});

  // const nextTurn = await Turn.findOne({
  //   where: { id: currentTurn.id + increment},
  //   include: { model: Player, attributes: ['status']},
  // });
  // if (game.id != nextTurn.gameId){
  //   //END GAME BY TIME
  // }

  ctx.body = JSON.stringify({ newTurn: game.current_turn, theGame: game});
};

const checkNextPlayer = async (currentTurn) => {
  let increment = 1;
  while (true) {
    const nextTurn = await Turn.findOne({
      where: { id: currentTurn.id + increment},
      include: { model: Player, attributes: ['status']},
    });
    console.log("---player is " + nextTurn.Player.status);
    if (nextTurn.Player.status == "active") {
      return increment;
    } else {
      increment += 1;
    }
  }
}

module.exports = {
  getStateOfTerritory,
  getPlayerTerritories,
  getPossibleAttacks,
  buildArmy,
  resolveAttack,
  getAvailableActions,
  passTurn,
};