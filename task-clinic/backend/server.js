const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5500;
const User = require("./models/User");
const AuthorizedUser = require("./models/AuthorizedUser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ivan:qwe123@cluster0.e43xl.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });

app.post("/form", async (req, res) => {
  await User.create({
    name: req.body.name,
    number: req.body.number,
    problem: req.body.problem,
  });
  res.send({ error: null });
});

app.post("/login", async (req, res) => {
  console.log(req.body);

  const login = req.body.login;
  const user = await AuthorizedUser.findOne({ login });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordCorrect = req.body.password == user.password;

  if (!isPasswordCorrect) {
    throw new Error("Password is not correct");
  }
  res.send({user})
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send({ users: users });
});

app.get("/application", async (req, res) => {
  res.send({ error: null });
});
