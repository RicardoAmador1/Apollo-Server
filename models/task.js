const { Schema, model } = require("mongoose");

new Schema({
  title: {
    type: String,
    requiere: true,
  },
  description: String,
});

module.exports = model("Task", taskSchema);
