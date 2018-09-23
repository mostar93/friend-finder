// var bodyParser = require("body-parser");


var friends = require("../data/friends.js");
module.exports = function (app) {


  console.log("ROUTE IS WORKING");
  console.log(friends);
  console.log(app);

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  console.log("ROUTE IS STill WORKING");

  app.post("/api/friends", function (req, res) {
    console.log("EXPRESS IS WORKING");
    // Create newFriend object
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    }
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };

    var totalDifference = 0;
    console.log("working so far");

    for (var i = 0; i < friends.length; i++) {
      totalDifference = 0;
      for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDifference = Math.abs(parseInt(newFriend.scores[j] - parseInt(friends[i].scores[j])));
        console.log(totalDifference);
        if (totalDifference <= bestMatch.friendDifference) {
          console.log("IM LOST!!!!");
          bestMatch.name = friends[i].name,
          bestMatch.photo = friends[i].photo,
          bestMatch.friendDifference = totalDifference
        }
      }

    };
    friends.push(newFriend);


    console.log(bestMatch);
  });
};

