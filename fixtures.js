const { default: mongoose } = require("mongoose");

const loadFixtures = (callback, autoDisconnect = false) => {
  mongoose.connection.once("connected", () => {
    callback();
    if (autoDisconnect) mongoose.connection.close();
  });
};

const loadDocument = async (data, model) => {
  addId(data);
  await model.insertMany(data);
};

const addId = (data) => {
  data.forEach((item) => (item._id = new mongoose.Types.ObjectId()));
};

module.exports = {
  loadFixtures,
  loadDocument,
};
