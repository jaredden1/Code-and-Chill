const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "American",
        "Chinese",
        "Thai",
        "Japanese",
        "Italian",
        "Mexican",
        "Indian",
      ],
    },
    favorite: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
