const mongoose = require("mongoose");

const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxlength: [30, "name can not be more than 30 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
