const router = require("express").Router();
const { Workout, Exercise } = require("../models");




router.get('/workouts', (req,res) => {
    Workout.find({})
    .populate("Exercise")
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
})




module.exports = router;