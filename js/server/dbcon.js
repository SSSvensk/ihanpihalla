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
  selectUser: function (uid, callback) {
    connection.query('SELECT * FROM designer WHERE smid = ?', uid, function(err, rows, fields) {
    if (err) throw err;
    console.log(rows.length);
    console.log(rows);
   
    if (rows.length > 0) {
      return callback(rows[0]);
    } else {
      return callback(null);
    }
  });
  },
  selectUsersByYard: function (ad, callback) {
    connection.query('SELECT * FROM designer WHERE address = ?', ad, function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    console.log(1);
   
    if (rows.length > 0) {
      return callback(rows);
    } else {
      return callback(null);
    }
  });
  },
  selectYards: function (callback) {
    connection.query('SELECT address FROM yard ORDER BY address', function(err, rows, fields) {
    if (err) throw err;
    console.log(rows.length);
    console.log(rows);
   
    if (rows.length > 0) {
      return callback(rows);
    } else {
      return callback(null);
    }
  });
  },
  addAddress: function (i, ad) {
    connection.query('UPDATE designer SET address = ? WHERE smid = ?', [ad, i], function(err, rows, fields) {
    if (err) throw err;
    console.log(rows.length);
    console.log(i);
    console.log(ad);
    });
  },
  insertUser: function (n, fi) {
    var userquery = {name: n, smid: fi};
    var queryString = 'INSERT INTO designer SET ?';
  connection.query(queryString, userquery, function(err, rows, fields) {
    if (err) throw err;
  });
  }
};