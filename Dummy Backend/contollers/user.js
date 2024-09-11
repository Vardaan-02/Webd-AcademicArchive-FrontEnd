const User = require("../models/Users");

async function handleSignUp(req, res) {
  const { first_name, last_name, roll_number, password, email, admin } =
    req.body;
  await User.create({
    first_name,
    last_name,
    roll_number,
    email,
    password,
    admin,
  });

  return res.redirect("/Home");
}

async function handleLogin(req, res) {
  const { password, email } = req.body;

  try {
    const token = await User.matchPassword(email, password);

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const { first_name, last_name, roll_number, admin } = user;
    console.log(first_name, last_name, roll_number, email, admin);

    return res
      .status(200)
      .send({ first_name, last_name, roll_number, email, admin });
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: "INVALID USER", error });
  }
}

module.exports = {
  handleSignUp,
  handleLogin,
};
