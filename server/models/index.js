var db = require('../db');
db.getFromDB('messages', console.log);
module.exports = {
  messages: {
    get: function (callback) {
      db.getFromDB('messages', callback);
    }, // a function which produces all the messages
    post: function (values, callback) {
      db.postToDB('messages', values, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.getFromDB('users', callback);
    },
    post: function (values, callback) {
      db.postToDB('users', values, callback);
    }
  }
};

