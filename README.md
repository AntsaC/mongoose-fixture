<h1 align=center>
  MONGOOSE FIXTURES
</h1>

<p align=center>
  This is a simple data fixtures for mongoose
</p>

## Installation

    $ npm install antsa-mongoose-fixture

## Feautures

- Drop database on each fixtures loading
- `_id` autogeneration on data fixture

## Usage

Define your model first

```js
// Define your model
const User = mongoose.model(
  "User",
  new Schema({
    username: String,
  })
);

const Post = mongoose.model(
  "Post",
  new Schema({
    title: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
  })
);
```

Define data for fixtures and use `fixtures.addId()` to generate `_id`

```js
const { fixtures } = require("antsa-mongoose-fixtures");

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

fixtures.addId(users); // Generate _id to simplify reference usage

const posts = [
  {
    title: "Post 1",
    author: users[0]._id, // Some reference on user 0
  },
  {
    title: "Post 2",
    author: users[2]._id, // Some reference on user 2
  },
];

fixtures.addId(posts);
```

Load fixtures now with `fixtures.load()` after mongoose connection is initialized

```js
const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.MONGO_URL); // Your mongoose connection

const { fixtures } = require("antsa-mongoose-fixtures");
fixtures.load([users, User], [posts, Post]);
```
