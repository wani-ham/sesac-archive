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

exports.getUser = (req, res) => {
    conn.query(`SELECT * FROM user WHERE userid='${data.userid}' limit 1`, 
        (err, rows)=>{
            if (err) throw err;
            cb(rows[0]);
        }
    );
}

exports.updateUser = (req, res) => {
    const { id, pw, name } = updateData;
    conn.query(`UPDATE user SET pw ='${pw}', name='${name}' WHERE id=${id}`, (err, rows) => {
            if (err) throw err;
            cb(true);
        }
    );
}

exports.deleteUser = (req, res) => {
    conn.query(`DELETE FROM user WHERE id=${targetId}`, (err, rows) => {
        if (err) throw err;
        cb(true);
      }
    );
}