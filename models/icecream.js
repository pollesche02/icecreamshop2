// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var icecream = {
  all: function(cb) {
      console.log("model all")
    orm.all("icecream", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("icecream", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("icecream", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database 
module.exports = icecream;