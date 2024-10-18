// Mongodb data association
const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/user");

app.get("/", function (req, res) {
  res.send("hey");
});

app.get("/create", async function (req, res) {
  let user = await userModel.create({
    username: "nafiz",
    age: 25,
    email: "nafiz@gmail.com",
  });
  res.send(user);
});

app.get("/post/create", async function (req, res) {
  let post = await postModel.create({
    postdata: "hello",
    user: "sdfjosd98u0sfdjkldf",
  });
  let user = await userModel.findOne({ _id: "sdfjosd98u0sfdjkldf" });
  user.posts.push(post._id);

  res.send({ post, user });
});

app.listen(3000);
