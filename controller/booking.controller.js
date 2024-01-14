const {
  postBookingService,
  getAllBookingService,
  createBookingService,
  bookingFindByIdService,
} = require("../service/booking.service");

module.exports.postBookingController = (req, res) => {
  postBookingService(req, res);
};

module.exports.getAllBookingController = (req, res) => {
  getAllBookingService(req, res);
};
module.exports.createBookingController = (req, res) => {
  createBookingService(req, res);
};
module.exports.bookingFindByIdController = (req, res) => {
  bookingFindByIdService(req, res);
};
