const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  active: Number
});

module.exports = mongoose.model('User', userSchema);
module.exports.schema = userSchema;