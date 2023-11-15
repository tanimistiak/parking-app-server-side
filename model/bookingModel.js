const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
  {
    parkingId: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const bookingModel = mongoose.model("bookingModel", bookingSchema);
module.exports = bookingModel;
