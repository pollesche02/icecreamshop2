var express = require("express");

var router = express.Router();
var db = require("../models/");

// router.get("/", function (req, res) {
//   res.redirect("/icecream");
// });

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
 db.Icecream.findAll()
  .then(function (db) {
    console.log(db)

    var dbArray = db.map(elem=> {return {
      id: elem.id,
      icecream_flavor: elem.icecream_flavor,
      devoured: elem.devoured
    }})
    var hbsObject = {
      icecream: dbArray,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    //res.json(data)
  });
});

router.post("/api/icecream", function (req, res) {
  db.Icecream.create({
    icecream_flavor: req.body.name,
    devoured: true,
  }).
    then(function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/icecream/:id", function (req, res) {
  db.Icecream.update(
    {
      devoured: false,
    },
    {
      where: {
        id: req.params.id,
      },
    }, function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
