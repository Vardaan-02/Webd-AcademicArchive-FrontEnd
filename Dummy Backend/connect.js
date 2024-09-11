const mongoose = require("mongoose");

const connectToMongoDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((e) => console.log(e));
};

module.exports = {
  connectToMongoDB,
};
