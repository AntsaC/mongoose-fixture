require("dotenv").config();
const { default: mongoose } = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Db connected");
  })
  .catch((error) => console.error(error));
