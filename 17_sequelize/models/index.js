const Sequelize = require('sequelize');
//****************************
// const config = require(__dirname + '/../config/config.json')["development"];  // env -> "development"
const config = require(__dirname + '/../config/config.js');  
const sequelize = new Sequelize(config.database, config.username, config.password, config);
// **************************

const db = {};




const PlayerModel = require('./Player')(sequelize, Sequelize);
const ProfileModel = require('./Profile')(sequelize, Sequelize);
const TeamModel = require('./Team')(sequelize, Sequelize);
const GameModel = require('./Game')(sequelize, Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize: sequelize, Sequelize: Sequelize}

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;

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

// 3) Team : Game = N:N
// TeamGame 
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: 'team_id',  // TeamGameModel에서 TeamModel을 참조하는 fk
  otherKey: 'game_id'  // TeamGameModel에서 GameModel을 참조하는 fk
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: 'game_id',
  otherKey: 'team_id'
});

module.exports = db;
// 다른 파일에서 db module을 사용할 예정