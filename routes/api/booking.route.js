const {
  postBookingController,
} = require("../../controller/booking.controller");

const bookingRouter = require("express").Router();
bookingRouter.route("/").post((req, res) => {
  postBookingController(req, res);
});

module.exports = bookingRouter;
