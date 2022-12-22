const mongoose = require("mongoose");

const WordLibSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  word: {
    type: Array,
    require: true,
  },
});

module.exports = mongoose.model("Words", WordLibSchema);
