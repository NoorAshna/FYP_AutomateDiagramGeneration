const mongoose = require("mongoose");

const schema = mongoose.Schema;

const DiagramSchema = new schema(
  {
    objectid: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    psuedocode: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Diagram = mongoose.model("Diagram", DiagramSchema);
module.exports = Diagram;
