var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'chat',
  // port : '3000'
});

connection.connect();

// connection.query('SELECT * from messages', function (error, results, fields) {
//   if (error) throw error;
//   console.log('Results --> : ', results);

//   console.log('Fields --> : ', fields[0]);
// });

module.exports = connection;
// module.exports = {
//   getFromDB: function(tablename, callback) {
//     connection.query(`SELECT * from ${tablename}`, function (error, results, fields){
//       if (error) console.log(error);
//       callback(results);
//     });
//   },
//   postToDB: function(tablename, callback) {
//     connection.query(`INSERT INTO ${tablename} SET ?`, values, function (error, results, fields){ // values is an object that contains the values to add to the table -- ie: {messageID: 0, text: "yo", userID: 1, roomId: 2}, it should get turned into string equalities for the query at ? -- ie: messageId=0, text="yo", userID=1, roomId=2  
//       if (error) throw error;
//       callback(results);
//     });
//   }
// }
 