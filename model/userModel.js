const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },

  // Other user fields
});

// Create the user model
const User = mongoose.model("User", userSchema);

module.exports = User;
