import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { application } from "express";
import { Router } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
let dataConnection = mongoose.connect(
  "mongodb://localhost:27017/User",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Data Base is connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  password: String,
});

const User = new mongoose.model("user", userSchema);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/register", function (req, res) {
  console.log(req.body);
  const { name, email, mobile, password } = req.body;
  //if user already present
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      console.log("message: user already register");
      res.send({ message: "user already register" });
    } else {
      const user = new User({
        name,
        email,
        mobile,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "sucessfully Register" });
        }
      });
    }
  });
});

app.post("/login", function (req, res) {
  var { email, password, id } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send(true);
      } else {
        res.send({ message: "password didn't match" });
      }
    } else {
      res.send({ message: "user not Register" });
    }
  });
});

app.listen(8085, () => {
  console.log(" Running on the localhost:8085");
});
