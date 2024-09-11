const mongoose = require("mongoose");
const crypto = require("crypto");
const { createTokenForUser } = require("../services/authentication");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  roll_number: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  admin:{
    type:Boolean,
    required:true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
});

userSchema.static("matchPassword",async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw "INVALID USER";
  const hashed = crypto
    .createHmac("sha256", user.salt)
    .update(password)
    .digest("hex");
  if(hashed === user.password) return createTokenForUser(user);
  else throw "WRONG PASSWORD";
});

userSchema.pre("save", function (next) {
  this.salt = crypto.randomBytes(16).toString();
  this.password = crypto
    .createHmac("sha256", this.salt)
    .update(this.password)
    .digest("hex");
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
