const { fixtures } = require("../../fixtures");
const users = require("./user.fixtures");

const posts = [
  {
    title: "Post 1",
    author: users[0]._id,
  },
  {
    title: "Post 2",
    author: users[2]._id,
  },
];

fixtures.addId(posts);

module.exports = posts;
