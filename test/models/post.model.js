const { default: mongoose, Schema } = require("mongoose");

const Post = mongoose.model(
  "Post",
  new Schema({
    title: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
  })
);

module.exports = Post;
