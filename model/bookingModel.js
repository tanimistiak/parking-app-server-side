const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
  {
    bookingDate: {
      type: String,
      required: true,
    },
    parkingId: {
      type: String,
      required: true,
    },
    fromHourInt: {
      type: Number,
      required: true,
    },
    toHourInt: {
      type: Number,
      required: true,
    },
    fromMinuteInt: {
      type: Number,
      required: true,
    },
    toMinuteInt: {
      type: Number,
      required: true,
    },
    difference: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const bookingModel = mongoose.model("bookingModel", bookingSchema);
module.exports = bookingModel;
