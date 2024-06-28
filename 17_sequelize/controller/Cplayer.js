// 선수와 관련된 컨트롤러의 모음
const { Player, Profile } = require('../models/index');

exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.json(players);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Servor Error');
    }
}

exports.getPlayer = async (req, res) => {
    try {
        const player = await Player.findOne({ 
            where: {player_id: `${req.params.player_id}`},
            include: [
                {
                    model: Profile,
                    attribute: ['positions', 'salary']
                }
            ]
        });
        res.json(player);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Servor Error');
    }
}

exports.postPlayer = async (req, res) => {
    try {
        console.log(req.body);
        const {name, age, team_id} = req.body;
        const newPlayer = await Player.create({
            name, age, team_id
        });
        res.json(newPlayer)
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Servor Error');
    }
}

exports.patchPlayer= async (req, res) => {
    try {
        const { player_id } = req.params;
        const { team_id } = req.body;

        // UPDATE `Player` SET `team_id`=?,`updatedAt`=? WHERE `player_id` = ?
        const updatedPlayer = await Player.update(
            { team_id }, // 무엇을 바꾸는데?
            { where: { player_id }} // 누구를 바꿔야하는데?
        );

        res.json(updatedPlayer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.deletePlayer = async (req, res) => {
    try {
        const {player_id} = req.params;
        const isDeleted = await Player.destroy({
            where: {player_id}
        });
        console.log(isDeleted);
        if(isDeleted) {
            return res.send(true);
        } else {
            return res.send(false);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Servor Error');
    }
}