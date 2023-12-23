const mongoose = require("mongoose");
const parkingSchema = new mongoose.Schema(
  {
    parkingLocation: {
      type: String,
      required: true,
    },
    parkingSlotName: {
      type: String,
      required: true,
    },
    duration: {
      type: [String],
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
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    postCode: {
      type: Number,
    },
    createdBy: {
      type: String,
      required: true,
    },
    fullAddress: {
      type: Object,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    placeId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const parkingModel = mongoose.model("parkingModel", parkingSchema);
module.exports = parkingModel;
