const {
  createParking,
  parkingListController,
  getAllParkingController,
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
parkingRouter.route("/:email").get((req, res) => {
  parkingListController(req, res);
});
module.exports = parkingRouter;
