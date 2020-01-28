const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
    minlength: [2, "Your first name must be at least 2 characters."]
  }
});
