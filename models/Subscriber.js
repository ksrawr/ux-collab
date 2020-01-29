const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
    minlength: [2, "Your first name must be at least 2 characters."],
    trim: true,
    match: [/^[a-z]+$/i, 'First name cannot contain numbers or special characters'],
  },
  lastName: {
    required: true,
    type: String,
    minlength: [2, "Your last name must be at least 2 characters."],
    trim: true,
    match: [/^[a-z]+$/i, 'Last name cannot contain numbers or special characters'],
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

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

module.exports = Subscriber;
