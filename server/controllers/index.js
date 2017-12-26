var models = require('../models');

// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };

// var statusCode = 200;
module.exports = {
  messages: {
    get: function (req, res) {
      // req.query = //{order: -createdAt}
      models.messages.get(function(results) {
        res.json({results: results});
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = []; 
      req.on('data', function(data) {
        body.push(data);
      });
      req.on('end', function() {
        // body = JSON.parse(JSON.stringify(body));
        body = body.toString().split('&');
        var message = {};
        message.text = body[1].slice(5).split('+').join(' ');
        message.username = body[0].slice(9).split('+').join(' ');
        message.roomname = body[2].slice(9).split('+').join(' ');
        console.log(message);
        var values = [message.text, message.username, message.roomname];


        models.users.post(message.username, function(error, results, fields) {
          models.messages.post(values, function(error, results, fields) {
            res.json({results:results});
          });
        });
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(error, results, fields) {
        res.json({results: results});
      });
    },
    post: function (req, res) {
      var body = []; 
      req.on('data', function(data) {
        body.push(data);
      });
      req.on('end', function() {
        var values = body.toString();
        models.users.post(values, function(error, results, fields) {
          res.json({results:results});
        });
      });
    }
  }
};

