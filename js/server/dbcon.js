var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...');
})

module.exports = {
  selectMatches: function (callback) {
    var queryString = 'SELECT ottelu.id AS matchid, ottelu.gametime, j1.nickname AS home, j2.nickname AS away, homegoals, awaygoals, j1.imgname AS homelogo, j2.imgname AS awaylogo FROM ottelu LEFT JOIN joukkue j1 ON j1.id = ottelu.homeid LEFT JOIN joukkue j2 ON j2.id = ottelu.awayid ORDER BY gametime ASC;';
    connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    console.log(rows.length);
   
    if (rows.length > 0) {
      return callback(rows);
    } else {
      return callback(null);
    }
  });
  },
  selectNextMatch: function (callback) {
    var queryString = 'SELECT * FROM ottelu WHERE gametime >= CURDATE()';
    connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    console.log(rows.length);
    console.log(rows[0].id);
   
    if (rows.length > 0) {
      return callback(rows[0].id);
    } else {
      return callback(null);
    }
  });
  },
  insertUser: function (n, fi) {
    var userquery = {name: n, fbid: fi};
    var queryString = 'INSERT INTO fbusers SET ?';
  connection.query(queryString, userquery, function(err, rows, fields) {
    if (err) throw err;
  });
  },
};