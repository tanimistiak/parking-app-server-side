// const moment = require("moment/moment");
const bookingModel = require("../model/bookingModel");
const moment = require("moment-timezone");

module.exports.getAllBookingService = async (req, res) => {
  try {
    const allBooking = await bookingModel.find();
    res.json(allBooking);
  } catch (error) {}
};

module.exports.postBookingService = async (req, res) => {
  //   console.log("booking");
  try {
    let {
      method,
      timeZone,
      parkingId,
      email,
      durationMinutes,
      startTime,
      endTime,
    } = req.body;

    if (method == "minute") {
      function addHoursToDate(date, hours) {
        return new Date(new Date(date).setHours(date.getHours() + hours));
      }
      function addMinutesToDate(date, minutes) {
        return new Date(new Date(date).setMinutes(date.getMinutes() + minutes));
      }
      const date = new Date();
      let startTime = addHoursToDate(date, 6);
      let endTime = addMinutesToDate(startTime, durationMinutes);
      // const endTime = moment(startTime).add(durationMinutes, "m").format();
      startTime = startTime.toISOString().slice(0, 16);
      endTime = endTime.toISOString().slice(0, 16);
      console.log(startTime, endTime);
      const overlappingBooking = await bookingModel.findOne({
        $or: [
          {
            $and: [
              { startTime: { $lte: startTime } },
              { endTime: { $gte: startTime } },
              { parkingId: parkingId },
            ],
          },
          {
            $and: [
              { startTime: { $lte: endTime } },
              { endTime: { $gte: endTime } },
              { parkingId: parkingId },
            ],
          },
        ],
      });
      if (overlappingBooking) {
        return res.json({ error: "Overlapping minute booking detected" });
      }

      // Create the booking
      const newBooking = await bookingModel.create({
        parkingId: parkingId,
        startTime: startTime,
        endTime: endTime,
        email: email,
        method: method,
      });
      await newBooking.save();

      res.json({ message: "Booking created successfully" });
    }
    if (method == "hour") {
      const overlappingBooking = await bookingModel.findOne({
        $or: [
          {
            $and: [
              { startTime: { $lte: startTime } },
              { endTime: { $gte: startTime } },
              { parkingId: parkingId },
            ],
          },
          {
            $and: [
              { startTime: { $lte: endTime } },
              { endTime: { $gte: endTime } },
              { parkingId: parkingId },
            ],
          },
        ],
      });
      if (overlappingBooking) {
        console.log(overlappingBooking);
        return res.json({ error: "Overlapping hour booking detected" });
      }

      // Create the booking
      const newBooking = await bookingModel.create(req.body);
      await newBooking.save();

      res.json({ message: "Booking created successfully" });
    }
    // Check for overlapping bookings
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
