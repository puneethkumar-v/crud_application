const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Must Provide the name of the task"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
