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

module.exports.getAllParkingService = async (req, res) => {
  console.log("hello");
  try {
    const allParking = await parkingModel.find({});
    res.status(200).json(allParking);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports.singleParkingDetailsService = async (req, res) => {
  console.log("hello");
  const { id } = req.params;
  // console.log(id);
  try {
    const allParking = await parkingModel.findById(id);
    console.log(allParking);
    res.status(200).json(allParking);
  } catch (error) {
    if (error) throw error;
  }
};
