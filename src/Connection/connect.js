const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:airbus1234@mayank.bxic6xx.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });
