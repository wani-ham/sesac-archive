const express = require('express');
const router = express.Router();
const controller = require('../controller/Cteam');

router.get('/', controller.getTeams);
router.get('/:team_id',controller.getTeam);
router.get('/:team_id/players',controller.getTeamPlayers);

module.exports = router;