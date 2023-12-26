const {
  createParking,
  parkingListController,
  getAllParkingController,
  singleParkingDetailsController,
  findParkingByLocationController,
} = require("../controller/parking.controller");

const parkingRouter = require("express").Router();
parkingRouter
  .route("/")
  .post((req, res) => {
    createParking(req, res);
  })
  .get((req, res) => {
    getAllParkingController(req, res);
  });
parkingRouter.route("/view-parking/:id").get((req, res) => {
  singleParkingDetailsController(req, res);
});
parkingRouter.route("/:email").get((req, res) => {
  parkingListController(req, res);
});
parkingRouter.route("/find-parking/:location").get((req, res) => {
  findParkingByLocationController(req, res);
});

module.exports = parkingRouter;
