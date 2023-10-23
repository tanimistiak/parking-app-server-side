const {
  createParkingService,
  parkingListService,
  getAllParkingService,
} = require("../service/parking.service");

module.exports.createParking = (req, res) => {
  createParkingService(req, res);
};
module.exports.parkingListController = (req, res) => {
  parkingListService(req, res);
};
module.exports.getAllParkingController = (req, res) => {
  getAllParkingService(req, res);
};
