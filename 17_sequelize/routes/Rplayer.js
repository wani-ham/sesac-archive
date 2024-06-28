// 선수와 관련된 라우터를 정의하는 파일
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cplayer');

// localhost:PORT/players

router.get('/', controller.getPlayers);
router.get('/:player_id', controller.getPlayer);
router.post('/', controller.postPlayer);
router.patch('/:player_id/team', controller.patchPlayer);
router.delete('/:player_id', controller.deletePlayer);

module.exports = router;