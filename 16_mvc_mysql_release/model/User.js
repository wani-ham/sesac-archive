// TODO: DB(mysql) 연결
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '!QAZxcde32',
    database: 'test1'
  }); 

// TODO: 모델 코드
exports.postSignup = (data, cb) => {
    conn.query(`insert into user(userid, name, pw) values ('${data.id}', '${data.name}', '${data.pw}')`,
        (err, rows) => {
            if (err) throw error;
            console.log('model/User.js >> ', rows);
            cb(rows.insertId);
        }
    );
}

exports.postSignin = (data, cb) => {
    conn.query(`select * from user where userid='${data.id}'`,
        (err, rows) => {
            if(err) {
                throw err
            };
            console.log('models/User.js >> ', rows);
            cb(rows.pw);
        }
    )
}