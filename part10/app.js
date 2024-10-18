const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "sharkar",
    username: "nafisfdkjz",
    email: "nafiz@gmail.com",
  });
  res.send(createduser);
});

app.get("/update", async (req, res) => {
  let createduser = await userModel.findOneAndUpdate(
    {
      username: "nafiz",
    },
    { name: "Fuad" },
    { new: true }
  );
  res.send(createduser);
});

// readALL
app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

// readOne
app.get("/readOne", async (req, res) => {
  let users = await userModel.find({ username: "nafiz" });
  res.send(users);
});

// delete one
app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "nafiz" });
});

app.listen(3000);
