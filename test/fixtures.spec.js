const { expect } = require("chai");
const { describe } = require("mocha");
const { default: mongoose } = require("mongoose");
const { fixtures } = require("../fixtures");
const users = require("./fixtures/user.fixtures");
const User = require("./models/user.model");
const posts = require("./fixtures/post.fixtures");
const Post = require("./models/post.model");

describe("fixtures test", () => {
  before(() => {
    require("./db");
  });

  after(() => {
    mongoose.connection.close();
  });

  it("should load users fixtures", async () => {
    await fixtures.load([users, User]);
    const actual = await User.find().exec();
    expect(3).equal(actual.length);
  });

  it("should get user by id", async () => {
    await fixtures.load([users, User]);
    const actual = await User.findById(users[0]._id).exec();
    expect("Antsa").equal(actual.username);
  });

  it("Should load post wiht author", async () => {
    await fixtures.load([users, User], [posts, Post]);
    const actual = await Post.findById(posts[0]._id).populate("author").exec();
    expect("Antsa").equal(actual.author.username);
  });
});
