const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExersizeSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },

});

const Exercise = mongoose.model("Exercise", ExersizeSchema);

module.exports = Exercise;