const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
    minlength: [2, "Your first name must be at least 2 characters."],
    trim: true
  },
  lastName: {
    required: true,
    type: String,
    minlength: [2, "Your last name must be at least 2 characters."],
    trim: true
  },
  email: {
    required: true,
    type: String,
    minlength: [2, "Your last name must be at least 2 characters."],
    trim: true
  },
  preferences: [String],
  frequency: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
