var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const ClasificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El campo name es requerido."],
    unique: true,
    trim: true,
    lowercase: true,
  },
});

ClasificationSchema.plugin(uniqueValidator);

const Clasification = mongoose.model("clasifications", ClasificationSchema);

export default Clasification;
