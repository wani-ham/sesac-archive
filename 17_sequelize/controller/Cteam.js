const {Team, Player} = require('../models/index');
const {Op} = require('sequelize');

exports.getTeams = async (req, res) => {
    try {
        const {sort, search} = req.query;
        console.log(req.query);
        let teams;

        if(sort === 'name_asc') {
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                order: [['name', 'ASC']]
            })
        } else if(search) {
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                where: {
                    name: {[Op.like]: `%${search}%`}
                }
        });
        } else {
            teams = await Team.findAll(
                {attributes: ['team_id', 'name']}
            );
        }

        
        res.json(teams);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Servor Error');
    }
}

exports.getTeam = async (req, res) => {
    try {
        const team_id = req.params.team_id;
        const team = await Team.findOne({
            where: {team_id}
        });
        res.json(team);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Servor Error');
    }
}

exports.getTeamPlayers = async (req, res) => {
    try {
        const team_id = req.params.team_id;
        const team = await Team.findOne({
            where: {team_id},
            include: [
                {
                    model: Player,
                    attribute: ['player_id', 'name', 'age']
                }
            ]
        });
        res.json(team)
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Servor Error');
    }
}