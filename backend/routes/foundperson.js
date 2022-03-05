const express = require("express");

// foundpersonRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /foundperson.
const foundpersonRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the foundpersons.
foundpersonRoutes.route("/foundperson").get(function (req, res) {
  let db_connect = dbo.getDb("FindingMissingPerson");
  db_connect
    .collection("foundpersons")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
    console.log(req.body);
});

// This section will help you get a single foundperson by id
foundpersonRoutes.route("/foundperson/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("foundpersons")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new foundperson.
foundpersonRoutes.route("/foundperson/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name_found_person: req.body.name_found_person,
    phone_no_volunteer:req.body.phone_no_volunteer,
    location:req.body.location,
    landmark:req.body.landmark
  };
  db_connect.collection("foundpersons").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
  console.log(req.body);
});

// This section will help you update a foundperson by id.
foundpersonRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
        name_found_person: req.body.name_found_person,
        phone_no_volunteer:req.body.phone_no_volunteer,
        location:req.body.location,
        landmark:req.body.landmark,
    },
  };
  db_connect
    .collection("foundpersons")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a foundperson
foundpersonRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("foundpersons").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = foundpersonRoutes;