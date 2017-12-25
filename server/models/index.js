var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function(error, results, fields) {
        if (error) throw error;
        callback(results);
      })
    }, // a function which produces all the messages
    post: function (values) {
      db.query('INSERT INTO messages VALUES ?', values, function() {});
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

