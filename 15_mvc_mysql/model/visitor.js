const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '!QAZxcde32',
  database: 'ex1'
}); // database 연결 객체

exports.getVisitors = (callback) => {
  conn.query(`select * from visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    
    console.log('model/Visitor.js >> ', rows);
    callback(rows)
  })
};    

exports.getVisitor = (targetId, callback) => {
  conn.query(`select * from visitor where id=${targetId}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model/Visitor.js >> ', rows);
    // model/Visitor.js >>  [ RowDataPacket { id: 6, name: 'lily', comment: 'hello' } ]
    callback(rows[0])  
  })
}

exports.postVisitor = (data, callback) => {
  conn.query(`insert into visitor(name, comment) values ('${data.name}', '${data.comment}')`, 
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model/Visitor.js >> ', rows);
      callback(rows.insertId)
    }
  )
}

exports.deleteVisitor = (targetId, callback) => {
  // targetId: 삭제해야할 visitor id
  conn.query(`delete from visitor where id=${targetId}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model/Visitor.js >> ', rows);
    callback(true); // 삭제
  })
}

exports.patchVisitor = (updateData, callback) => {
  const { id, name, comment } = updateData;
  conn.query(
    `update visitor set name='${name}', comment='${comment}' where id=${id}`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model/Visitor.js >> ', rows);
      callback(true); // 수정
    });
}