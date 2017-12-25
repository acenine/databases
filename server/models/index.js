var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT messages.messageID, messages.body, messages.roomname, users.username FROM messages, users WHERE users.userID = messages.userID', function(error, results, fields) {
        //messagesID, body, userID, roomname
        // if (error) throw error;
        callback(results);
      })
    }, // a function which produces all the messages
    post: function (values) {
      db.query('INSERT INTO messages.body, message.userID, messages.roomname VALUES (?, (SELECT users.userID FROM users WHERE users.username = ?), ?)', values, function(error, results, fields) {
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
      db.query('INSERT INTO users (name) VALUES ?', value, function() {});
    }
  }
};

