const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'user',
    password: '!QAZxcde32',
    database: 'ex1'
});

exports.getVisitors = (callback) => {
    conn.query(`select * from visitor`, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('visitor.js: ', rows);
        callback(rows);
    });
};

exports.postVisitor = (data, callback) => {
    conn.query(`insert into visitor(name, comment) values ('${data.name}', '${data.comment}')`,
        (err, rows) => {
            if (err) throw err;
            console.log('model/visitor.js >> ', rows);
            callback(rows.insertId);
        }
    );
}