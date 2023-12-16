const {
  postBookingController,
  getAllBookingController,
} = require("../../controller/booking.controller");

const bookingRouter = require("express").Router();
bookingRouter
  .route("/")
  .post((req, res) => {
    postBookingController(req, res);
  })
  .get((req, res) => {
    getAllBookingController(req, res);
  });

module.exports = bookingRouter;
