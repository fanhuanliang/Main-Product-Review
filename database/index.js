const mysql = require('mysql');
const key = require('./config/key.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: key,
  database: 'fec',
});

connection.connect();

var getColosseumData = (callback) => {
  connection.query('SELECT * FROM users', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
};

var insertColosseumData = (data, callback) => {
  // console.log(JSON.stringify(data))
  console.log(data)
  connection.query(`INSERT INTO users(first_name, last_name) VALUES ("${data.first_name}", "${data.last_name}")`, data, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
};
module.exports = {
  getColosseumData,
  insertColosseumData,
}