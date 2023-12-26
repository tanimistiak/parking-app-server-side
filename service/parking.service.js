const parkingModel = require("../model/parkingModel");

module.exports.createParkingService = async (req, res) => {
  try {
    const data = req.body;

    const createdParking = await parkingModel.create(data);
    if (createdParking) {
      res.json(createdParking);
    } else {
      res.json("error");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.parkingListService = async (req, res) => {
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

    res.status(200).json(allParking);
  } catch (error) {
    if (error) throw error;
  }
};

module.exports.findParkingByLocationService = async (req, res) => {
  const { location } = req.params;
  console.log(req.params);
  try {
    if (location != "undefined") {
      const foundLocation = await parkingModel.find();
      const matchLocation = foundLocation.filter((foundLocation) =>
        foundLocation.parkingLocation
          .toLowerCase()
          .includes(location.toLowerCase())
      );
      console.log(matchLocation);
      if (matchLocation) {
        res.json(matchLocation);
      } else {
        res.json("no match found");
      }
    }
    if (location == "undefined") {
      const allLocation = await parkingModel.find();
      console.log(allLocation);
      res.json(allLocation);
    }
  } catch (error) {
    console.log(error);
  }
};
