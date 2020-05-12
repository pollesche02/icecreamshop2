console.log("routes")
var express = require("express");

var router = express.Router();


var icecream = require("../models/icecream.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log("route get")
    icecream.all(function(data) {
    var hbsObject = {
      icecream: data
    };
    console.log(hbsObject);
     res.render("index", hbsObject);
    //res.json(data)
  });
});

router.post("/api/icecream", function(req, res) {
  icecream.create([
    "icecream_flavor", "devoured"
  ], [
    req.body.name, 1
    ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/icecream/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  icecream.update({
    devoured: 0
  }, condition, function(result) {
    if (result.changedRows == 0) {
     
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;