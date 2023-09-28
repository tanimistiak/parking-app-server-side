const mongoose = require("mongoose");
const parkingSchema = new mongoose.Schema(
  {
    parkingLocation: {
      type: String,
      required: true,
    },
    durationUnit: {
      type: String,
      enum: ["minutes", "hours", "days"],
    },
    status: {
      type: String,
      enum: ["booked", "free"],
      default: "free",
    },
    ip: {
      type: String,
    },
  },
  { timestamps: true }
);
const parkingModel = mongoose.model("parkingModel", parkingSchema);
module.exports = parkingModel;
