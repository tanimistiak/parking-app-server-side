const {
  postBookingController,
  getAllBookingController,
  createBookingController,
  bookingFindByIdController,
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
bookingRouter.route("/create-booking").post((req, res) => {
  createBookingController(req, res);
});
bookingRouter.route("/:id").get((req, res) => {
  bookingFindByIdController(req, res);
});
module.exports = bookingRouter;
