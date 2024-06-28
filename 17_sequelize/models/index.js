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

// 모델간 관계 연결
// sourceKey <-> targetKey 유의!!
// 1) Player : Profile = 1:1
PlayerModel.hasOne(ProfileModel, {
  onDelete: 'cascade',
  onUpdate: 'cascade',
  foreignKey: 'player_id',
  sourceKey: 'player_id'
})
ProfileModel.belongsTo(PlayerModel, {
  foreignKey: 'player_id',
  targetKey: 'player_id'
})

// 2) Team : Player = 1:N
TeamModel.hasMany(PlayerModel, {
  foreignKey: 'team_id',
  sourceKey: 'team_id'
})
PlayerModel.belongsTo(TeamModel, {
  foreignKey: 'team_id',
  targetKey: 'team_id'
})


module.exports = db;
// 다른 파일에서 db module을 사용할 예정