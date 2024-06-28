// Define Player model
const playerModel = (sequelize, DataTypes) => {
    // sequelize: models/index.js에서 sequelize (db 연결 정보를 입력하여 생성한 객체)
    // DataTypes: models/index.js에서의 Sequelize (sequelize 패키지 그 자체)
    const Player = sequelize.define('Player', // param1: 모델의 이름 설정
    // param2: 모델의 칼럼을 정의
    {
        player_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(63),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    // param3 : 모델의 옵션을 정의
    {
        freezeTableName: true,  // 테이블 명 고정
        //timestamps: false, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
    });
    return Player;
}

module.exports = playerModel;