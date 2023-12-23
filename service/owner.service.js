const userModel = require("../model/ownerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Owner = require("../model/ownerModel");

const saltRounds = 10;
module.exports.ownerRegisterService = async (req, res) => {
  const { email } = req.body;
  try {
    const registeredOwner = await Owner.create({ email: email });
    res.json(registeredOwner);
  } catch (error) {
    console.log(error);
  }
};

module.exports.loginUserService = async (req, res) => {};

module.exports.ownerProfileUpdateService = async (req, res) => {
  try {
    const data = req?.body;
    const { email, name } = data;

    if (data) {
      let updateUser = await Owner.updateOne({ email: email }, { name: name });

      console.log(updateUser);
      if (updateUser.modifiedCount != 0) {
        res.json(updateUser);
      } else {
        res.json("could not update");
      }
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports.ownerFindService = async (req, res) => {
  const email = req.params.email;

  try {
    const foundOwner = await Owner.find({ email: email });
    if (foundOwner) {
      res.json(foundOwner);
    }
  } catch (error) {
    console.log(error);
  }
};
