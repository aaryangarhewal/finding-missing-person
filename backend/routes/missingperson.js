const express = require("express");

// missingpersonRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /missingperson.
const missingpersonRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the missingpersons.
missingpersonRoutes.route("/missingperson").get(function (req, res) {
  let db_connect = dbo.getDb("FindingMissingPerson");
  db_connect
    .collection("missingpersons")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
    console.log(req.body);
});

// This section will help you get a single missingperson by id
missingpersonRoutes.route("/missingperson/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("missingpersons")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new missingperson.
missingpersonRoutes.route("/missingperson/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name_missing_person: req.body.name_missing_person,
    gender: req.body.gender,
    name_guardian: req.body.name_guardian,
    phone_no:req.body.phone_no,
    address:req.body.address,
    date:req.body.date,
  };
  db_connect.collection("missingpersons").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
  console.log(req.body);
});

// This section will help you update a missingperson by id.
missingpersonRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
        name_missing_person: req.body.name_missing_person,
        gender: req.body.gender,
        name_guardian: req.body.name_guardian,
        phone_no:req.body.phone_no,
        address:req.body.address,
        date:req.body.date
    },
  };
  db_connect
    .collection("missingpersons")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a missingperson
missingpersonRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("missingpersons").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = missingpersonRoutes;