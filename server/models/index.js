var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT messages.messageID, messages.text, messages.roomname, users.username FROM messages, users WHERE users.userID = messages.userID', function(error, results, fields) {
        // messagesID, body, userID, roomname
        // if (error) throw error;
        callback(results);
      })
    }, // a function which produces all the messages
    post: function (values, callback) {
      
      db.query('INSERT INTO messages (text, userID, roomname) VALUES (?, (SELECT userID FROM users WHERE username = ?), ?)', values, function(error, results, fields) {
        //body, username, roomname
        // if (error) throw error;
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', function(error, results, fields) {
        if (error) throw error;
        callback(results);
      })
    },
    post: function (value, callback) {
      db.query('SELECT * FROM users WHERE username=?', value, function(error, results, fields) {
        // if (error) throw error;

        if (results.length) {
          callback(results);
        }
        else {
          db.query('INSERT INTO users (username) VALUES (?)', value, function(error, results, fields) {
            if (error) throw error;
            callback(results);
          });
        }
      })
    }
  }
};

