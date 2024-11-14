const mongoose = require("mongoose");

const AuthorizedUserSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AuthorizedUser = mongoose.model("AuthorizedUser", AuthorizedUserSchema);

module.exports = AuthorizedUser;
