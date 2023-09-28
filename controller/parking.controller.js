const {
  createParkingService,
  parkingListService,
} = require("../service/parking.service");

module.exports.createParking = (req, res) => {
  createParkingService(req, res);
};
module.exports.parkingListController = (req, res) => {
  parkingListService(req, res);
};
