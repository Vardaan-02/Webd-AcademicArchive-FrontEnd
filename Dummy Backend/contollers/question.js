const Question = require("../models/Question");

async function handleCreatePost(req, res) {
  // await Question.create({
    
  // });

  return res.redirect("/Home");
}

module.exports = {
  handleCreatePost,
};
