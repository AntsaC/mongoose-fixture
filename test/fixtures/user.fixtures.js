const { fixtures } = require("../../fixtures");

const users = [
  {
    username: "Antsa",
  },
  {
    username: "Fiderana",
  },
  {
    username: "Miando",
  },
];

fixtures.addId(users);

module.exports = users;
