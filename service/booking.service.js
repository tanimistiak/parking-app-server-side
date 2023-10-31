const bookingModel = require("../model/bookingModel");

module.exports.postBookingService = async (req, res) => {
  //   console.log("booking");
  try {
    const body = req?.body;
    const {
      parkingId,
      fromHourInt,
      toHourInt,
      fromMinuteInt,
      toMinuteInt,
      bookingDate,
    } = body;

    // console.log(dayMonthYear);
    console.log(bookingDate);
    const bookingCollection = await bookingModel.find({
      parkingId: parkingId,
      bookingDate: bookingDate,
      $or: [
        {
          fromHourInt: { $gte: fromHourInt, $lt: toHourInt },
          toHourInt: { $lte: toHourInt },
        },
        {
          fromHourInt: { $lte: fromHourInt },
          toHourInt: { $gte: fromHourInt, $lt: toHourInt },
        },
        {
          fromHourInt: { $lte: fromHourInt, $lt: toHourInt },
          toHourInt: { $gte: toHourInt },
        },
      ],
    });

    console.log(bookingCollection);
    /* if (bookingCollection.length > 0) {
      res.json("already booked");
    } else {
      const postedData = await bookingModel.create({
        ...body,
        bookingDate: bookingDate.split("T")[0],
      });
      res.status(200).json(postedData);
    } */
  } catch (error) {
    if (error) throw error;
  }
};
