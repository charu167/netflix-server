const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    img: { type: String, required: true, unique: true },
    imgTitle: { type: String, required: true, unique: true },
    imgSmall: { type: String, required: true, unique: true },
    trailor: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
