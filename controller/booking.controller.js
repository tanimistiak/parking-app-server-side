const { postBookingService } = require("../service/booking.service");

module.exports.postBookingController = (req, res) => {
  postBookingService(req, res);
};
