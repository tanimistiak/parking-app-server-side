const publicUserModel = require("../model/publicUserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const upload = require("../utils/multerInstance");
const fs = require("fs");
const saltRounds = 10;

module.exports.publicUsersService = (req, res) => {
  const { email, password } = req.body;
  fs.renameSync(
    req.file.path,
    "public/uploads/" + req.body.email + "." + req.file.mimetype.split("/")[1]
  );
  const image = `public/uploads/${email}` + ".png";
  if (!email || !password) {
    return res.status(400).send("Email or password are required");
  }

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    if (err) {
      console.error("Hashing error:", err);
      return res.status(500).send("Error hashing password");
    }

    try {
      const createdUser = await publicUserModel.create({
        email,
        password: hash,
        image: image,
      });
      // console.log(createdUser);

      jwt.sign(
        createdUser.toJSON(),
        process.env.JWT_TOKEN,
        function (err, token) {
          if (err) {
            console.error("JWT signing error:", err);
            return res.status(500).send("Error signing JWT");
          }

          // console.log(token);

          res
            .status(200)
            .cookie("userToken", token, { domain: ".onrender.com" })

            .json({
              id: createdUser._id,
              email: createdUser.email,
              image: image,
            })
            .send("Success");
        }
      );
    } catch (error) {
      if (error.code === 11000) {
        console.error("Duplicate key error:", error.message);
        return res.status(400).send("Duplicate key error");
      }

      console.error("Database error:", error);
      res.status(500).send("Database error");
    }
  });
};

module.exports.publicUsersProfileService = async (req, res) => {
  const { userToken } = req?.cookies;

  try {
    if (userToken) {
      await jwt.verify(
        userToken,
        process.env.JWT_TOKEN,
        function (err, decoded) {
          if (err) throw err;
          else console.log(decoded);
          res.json(decoded);
        }
      );
    } else {
      res.status(401).send("no public user");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.allPublicUsersService = async (req, res) => {
  const id = req.params.id;
  const foundUser = await publicUserModel.findById(id);
  res.json(foundUser.name);
  console.log(id);
  // const keysTokeep=
  // if (foundUser) {
  //   res.json(foundUser);
  // }
  console.log(foundUser);
};

module.exports.publicUsersProfileUpdateService = async (req, res) => {
  try {
    const data = req?.body;
    const { id, name, email } = data;
    if (data) {
      let foundUser = await publicUserModel.findById(id);

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

module.exports.publicUsersRetrieveImageService = (req, res) => {
  const fileName = req.params?.email;
  // console.log(fileName);
  if (fileName) {
    // "public/uploads/" + req.body.email + "." +
    const imagePath = `public/uploads/${fileName}` + ".jpeg";
    console.log(imagePath);
    if (fs.existsSync(imagePath)) {
      const image = fs.readFileSync(imagePath);
      res.setHeader("Content-Type", "image/jpeg");
      console.log(image);
      res.send(image);
    }
  }
};

module.exports.publicUsersLoginService = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const foundUser = await publicUserModel.findOne({ email });
  const hashedPass = foundUser?.password;
  if (foundUser) {
    try {
      bcrypt.compare(password, hashedPass, function (err, result) {
        if (err) throw err;
        if (result) {
          jwt.sign(foundUser.toJSON(), process.env.JWT_TOKEN, (err, token) => {
            if (err) throw err;
            res
              .status(200)
              .cookie("userToken", token, { domain: ".onrender.com" })
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
