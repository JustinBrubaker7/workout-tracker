const router = require("express").Router();
const { Workout } = require("../models");
const mongojs = require("mongojs");



//get all workouts
router.get('/workouts', (req,res) => {
    Workout.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
})

//post a new workout
router.post('/workouts', ({body},res) => {
  console.log(body)
  Workout.create(body)
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.json(err);
  });
});

//add new exercise to your current workout
router.put("/workouts/:id", ({ params, body }, res) => {
  console.log(body)
  Workout.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        exercises: [body]
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

router.get('/workouts/range', (req,res) => {
  Workout.find({})
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.json(err);
  });
})


module.exports = router;


// {
//   type: type,
//   name: name,
//   duration: duration,
//   weight: weight,
//   reps: reps,
//   sets: sets,
// },