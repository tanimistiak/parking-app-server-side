const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports.registerServiceUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    if (email !== "undefined" && password !== "undefined") {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) throw err;
        const createdUser = await userModel.create({ email, password: hash });
        console.log(createdUser);
        await jwt.sign(
          createdUser.toJSON(),
          process.env.JWT_TOKEN,
          function (err, token) {
            if (err) throw err;
            console.log(token);
            res
              .status(201)
              .cookie("token", token)
              .json({ id: createdUser._id, email: createdUser.email })
              .send("success");
          }
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.loginUserService = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const foundUser = await userModel.findOne({ email });
  const hashedPass = foundUser.password;
  if (foundUser) {
    try {
      bcrypt.compare(password, hashedPass, function (err, result) {
        if (err) throw err;
        if (result) {
          jwt.sign(foundUser.toJSON(), process.env.JWT_TOKEN, (err, token) => {
            if (err) throw err;
            res
              .status(200)
              .cookie("token", token)
              .json({ id: foundUser._id, email: foundUser.email });
          });
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

module.exports.ownerProfileService = async (req, res) => {
  const { token } = req?.cookies;
  if (token) {
    await jwt.verify(token, process.env.JWT_TOKEN, function (err, decoded) {
      if (err) throw err;
      else console.log(decoded);
      res.json(decoded);
    });
  } else {
    res.status(401).send("no user");
  }
};
module.exports.ownerProfileUpdateService = async (req, res) => {
  try {
    const data = req?.body;
    const { id, name, email } = data;
    if (data) {
      let foundUser = await userModel.findById(id);

      const updateUser = await foundUser.updateOne({
        name: name,
        email: email,
      });
      if (updateUser.modifiedCount != 0) {
        res.json(updateUser);
      }
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports.allOwnerService = async (req, res) => {
  const id = req.params.id;
  const foundUser = await userModel.findById(id);
  res.json(foundUser.name);
  console.log(id);
  // const keysTokeep=
  // if (foundUser) {
  //   res.json(foundUser);
  // }
  console.log(foundUser);
};
