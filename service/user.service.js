const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const fs = require("fs");
const User = require("../model/userModel");

const saltRounds = 10;

module.exports.userRegisterService = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const createdUser = await User.create({ email: email });

    if (createdUser) {
      console.log(createdUser);
      res.json(createdUser);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.userFindService = async (req, res) => {
  const { email } = req.params;
  try {
    const userFound = await User.find({ email: email });
    if (userFound) {
      res.json(userFound);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.userProfileUpdateService = async (req, res) => {
  try {
    const data = req?.body;
    const { name, email } = data;
    console.log(name, email);
    if (data) {
      const foundUser = await User.findOne({ email: email });
      console.log(foundUser);
      let updateUser = await User.updateOne({ email: email }, { name: name });
      console.log(updateUser);
      if (updateUser.modifiedCount != 0) {
        res.json(updateUser);
      }
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports.publicUsersRetrieveImageService = (req, res) => {
  const fileName = req.params?.email;

  if (fileName) {
    // "public/uploads/" + req.body.email + "." +
    const imagePath = `public/uploads/${fileName}` + ".jpeg";

    if (fs.existsSync(imagePath)) {
      const image = fs.readFileSync(imagePath);
      res.setHeader("Content-Type", "image/jpeg");

      res.send(image);
    }
  }
};

module.exports.publicUsersLoginService = async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email });
  const hashedPass = foundUser?.password;
  if (foundUser) {
    try {
      bcrypt.compare(password, hashedPass, async function (err, result) {
        if (err) throw err;
        if (result) {
          await jwt.sign(
            foundUser.toJSON(),
            process.env.JWT_TOKEN,
            (err, token) => {
              if (err) throw err;
              res
                .status(200)
                .cookie("userToken", token)
                .json({ id: foundUser._id, email: foundUser.email });
            }
          );
        }
        if (!result) {
          res.send("pass not matched");
        }
      });
    } catch (error) {
      res.json(error.message);
    }
  } else {
    res.send("user not found");
  }
};

module.exports.allPublicUserDeleteService = async (req, res) => {
  try {
    const deleted = await User.deleteMany({});
    console.log(deleted);
    res.json(deleted);
  } catch (error) {
    console.log(error);
  }
};
