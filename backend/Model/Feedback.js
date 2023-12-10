const mongoose = require("mongoose");

const schema = mongoose.Schema;

const FeedbackSchema = new schema(
  {
    objectid: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    diagramid: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
