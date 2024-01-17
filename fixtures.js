const { default: mongoose } = require("mongoose");

const loadFixtures = async (...fixtures) => {
  await mongoose.connection.dropDatabase();
  for (const fixture of fixtures) {
    if (fixture instanceof Array) {
      await loadDocument(fixture[0], fixture[1]);
    } else {
      throw Error("Fixture array expected");
    }
  }
};

const loadDocument = async (data, model) => {
  await model.insertMany(data);
};

const addId = (data) => {
  data.forEach(
    (item) => !item._id && (item._id = new mongoose.Types.ObjectId())
  );
};

exports.fixtures = {
  load: loadFixtures,
  addId,
};
