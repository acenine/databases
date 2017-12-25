var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

var statusCode = 200;
module.exports = {
  messages: {
    get: function (req, res) {
      // req.query = //{order: -createdAt}
      models.messages.get(function(error, results, fields) {
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(([req.json.body, req.json.userID, req.json.roomname]), function(error, results, fields) {
        res.json(results);
      });
    
      // var data = req.json;
      // var values = [];
      // for (key in data) {
      //   values.push(data[key]);
      // }
      // values = '(' + values.join(',') + ')';
      // models.messages.post(values);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(error, results, fields) {
        res.json(results);
      });
    },
    post: function (req, res) {
      models.users.post(req.json.username, function(error, results, fields) {
        res.json(results);
      });
    }
  }
};

