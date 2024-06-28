const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')["development"];  // env -> "development"
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);

const PlayerModel = require('./Player')(sequelize, Sequelize);
const ProfileModel = require('./Profile')(sequelize, Sequelize);
const TeamModel = require('./Team')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize: sequelize, Sequelize: Sequelize}

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;

module.exports = db;
// 다른 파일에서 db module을 사용할 예정