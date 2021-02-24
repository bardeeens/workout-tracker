var db = require("../models");

module.exports = function(app) {

//   display workouts
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data)
      }
    })
    // .then(dbBook => {
    //     console.log(dbBook);
    //   res.json(dbBook);
    // })
    // .catch(err => {
    //   res.json(err);
    // });
  });
// add exercises to existing workout
  app.put("/api/workouts/:id", function({body}, res) {
db.Exercise.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbWorkout => {
        console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
// add execsises to new workout
  app.post("/api/workouts", function(req, res) {
    console.log("route hit bababy");
    // db.Exercise.create({})
  });
// get workouts within range
  app.get("/api/workouts/range", function(req, res) {
    
  });


};