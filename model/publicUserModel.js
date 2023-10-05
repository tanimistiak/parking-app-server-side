const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const publicUserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const publicUserModel = mongoose.model("publicUserModel", publicUserSchema);
module.exports = publicUserModel;
