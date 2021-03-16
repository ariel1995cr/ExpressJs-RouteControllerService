var mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  director: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  clasification: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clasifications",
    },
  ],
});

const Movie = mongoose.model("movie", MovieSchema);

export default Movie;
