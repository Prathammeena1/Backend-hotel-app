const mongoose = require("mongoose");

module.exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected.");
    })
    .catch((err) => {
      console.log(err);
    });
};
