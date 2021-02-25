var db = require("../models");

module.exports = function(app) {

//   display workouts
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
      .then(function(results) {
        console.log("RESULTS: ",results);
        res.json(results);
      })
      .catch(function(err){
        res.json(err);
      });
  });
// add exercises to existing workout
  app.put("/api/workouts/:id", function(req, res) {
    console.log(req.params.id, " ballsacks");
    const id = req.params.id
    // console.log(location.search.split("=")[1], "AAAAAAAAAAAAAAAAAAAAaaa");
    // console.log(res, "!!!!!!!!!!!!!!!!!!1111!"); ,id: req.params.id
db.Workout.updateOne({ _id:  id }, { $push: { exercises: req.body } }, { new: true })
    .then(function(results){
      res.json(results);
    })
    .catch(function(err){
      res.json(err)
    })
  });
// add execsises to new workout
  app.post("/api/workouts", function(req, res) {
    console.log("post /api/workouts route hit!!!!!!!!1");
   db.Workout.create(req.body)
   .then(function(results){
     res.json(results);
   })
   .catch(function(err){
     res.json(err);
   })
   
  });
// get workouts within range
  app.get("/api/workouts/range", function(req, res) {
      db.Workout.find({}).sort({day:-1}).limit(7)
      .then(function(results){
        res.json(results);
      })
      .catch(function(err) {
        res.json(err)
      })
    });
}



   // db.Workout.aggregate(
    //   [
    //     {
    //       $addfields: {
    //         totalDuration: { $sum: "$exercises.duration" }
    //       }
    //     }
    //   ]).sort({ day: -1 }).limit(7)
    //   .then(dbWorkout => {
    //     res.json(dbWorkout);
    //   })
    //   .catch(err => {
    //     res.json(err)
    //   })