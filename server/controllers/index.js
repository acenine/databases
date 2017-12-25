var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(console.log);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get();
    },
    post: function (req, res) {
      console.log(req);
      models.users.post();
    }
  }
};

