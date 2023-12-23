const mongoose = require("mongoose");

// Define the owner schema
const ownerSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  // Other owner fields
});

// Create the owner model
const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
