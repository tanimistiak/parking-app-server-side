const {
  postBookingService,
  getAllBookingService,
} = require("../service/booking.service");

module.exports.postBookingController = (req, res) => {
  postBookingService(req, res);
};

module.exports.getAllBookingController = (req, res) => {
  getAllBookingService(req, res);
};
