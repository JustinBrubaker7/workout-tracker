const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExersizeSchema = new Schema({
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  number: {
    type: Number,
    unique: true,
    required: true
  },
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout"
    }
  ]
});

const Exersize = mongoose.model("Exersize", ExersizeSchema);

module.exports = Exersize;