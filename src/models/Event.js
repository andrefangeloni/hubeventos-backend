const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    author: String,
    name: String,
    place: String,
    description: String,
    image: String,
    value: String,
    date: String,
    hour: String,
    subscribes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Event", EventSchema);
