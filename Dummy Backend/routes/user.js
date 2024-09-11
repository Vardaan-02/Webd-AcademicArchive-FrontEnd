const express = require("express");
const {handleSignUp,handleLogin} = require("../contollers/user");

const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("SignUp");
});

router.post("/signup",handleSignUp);

router.get("/login", (req, res) => {
  res.render("Login");
});

router.post("/login",handleLogin);

module.exports = router;
