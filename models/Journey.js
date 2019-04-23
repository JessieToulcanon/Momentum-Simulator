const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const JourneySchema = new Schema(
  {
    user: { type: ObjectId, ref: "User" },
    timing: Number,
    mode: {
      type: String,
      enum: ["Voiture", "Transport", "Vélo", "Vélo électrique"]
    },
    adress1: String,
    adress2: String,
    km_numbers: Number,
    annual_cost: Number,
    annual_kcal: Number,
    annual_carbon: Number,
    feeling: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Journey = mongoose.model("Journey", JourneySchema);
module.exports = JourneySchema;
