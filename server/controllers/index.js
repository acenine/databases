var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      model.messages.get(res.json);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.json, res.json);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      model.users.get(res.json);
    },
    post: function (req, res) {
      models.users.post(req.json, res.json);
    }
  }
};

