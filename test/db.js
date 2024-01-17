require("dotenv").config();
const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.MONGO_URL).catch((error) => console.error(error));
