const bookingModel = require("../model/bookingModel");

module.exports.postBookingService = async (req, res) => {
  //   console.log("booking");
  try {
    const { startTime, endTime } = req.body;

    // Check for overlapping bookings
    const overlappingBooking = await bookingModel.findOne({
      $or: [
        {
          $and: [
            { startTime: { $lte: startTime } },
            { endTime: { $gte: startTime } },
          ],
        },
        {
          $and: [
            { startTime: { $lte: endTime } },
            { endTime: { $gte: endTime } },
          ],
        },
      ],
    });

    if (overlappingBooking) {
      console.log(overlappingBooking);
      return res.status(400).json({ error: "Overlapping booking detected" });
    }

    // Create the booking
    const newBooking = await bookingModel.create(req.body);
    await newBooking.save();

    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
