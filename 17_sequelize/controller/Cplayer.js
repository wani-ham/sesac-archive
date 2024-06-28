// 선수와 관련된 컨트롤러의 모음
const { Player } = require('../models/index');

exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.json(players);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Servor Error');
    }
}