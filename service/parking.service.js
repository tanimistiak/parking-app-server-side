const parkingModel = require("../model/parkingModel");

module.exports.createParkingService = async (req, res) => {
  console.log(req.body);
  try {
    const data = req.body;
    const createdParking = await parkingModel.create(data);
    if (createdParking) {
      res.json(createdParking);
    } else {
      res.json("couldn not create");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.parkingListService = async (req, res) => {
  console.log(req.params);
  try {
    const { email } = req.params;
    const allParking = (await parkingModel.find({})).filter(
      (item) => item.createdBy === email
    );
    if (allParking) {
      res.json(allParking);
    } else {
      res.json("no parking");
    }
  } catch (error) {
    console.log(error);
  }
};