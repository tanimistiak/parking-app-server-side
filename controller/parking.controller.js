const {
  createParkingService,
  parkingListService,
  getAllParkingService,
  singleParkingDetailsService,
  findParkingByLocationService,
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
module.exports.singleParkingDetailsController = (req, res) => {
  singleParkingDetailsService(req, res);
};
module.exports.findParkingByLocationController = async (req, res) => {
  findParkingByLocationService(req, res);
};
