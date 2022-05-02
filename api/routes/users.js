let express = require('express');
const mongoose = require("mongoose");
const { v4 } = require('uuid');

const { route } = require('.');
const app = express();
let router = express.Router();

// User Schema
const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  phone: String,
  university: String
})

const User = mongoose.model('User', userSchema);

/* GET questions listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, posts) {
    if (err) {
      console.log(err);
      res.send("Some error occurred");
    } else {
      console.log(posts);
      res.json(Object.values(posts));
    }
  });
});

router.get('/:id', function(req, res, next) {
  User.find()
});

router.post("/", function(req, res, next){
  console.log(user);
  var db = process.env.MONGO_URI;
  db.collection("users").insertOne(user);
  res.json({"message":"User inserted"});
  let user = new User({
    id: v4(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    university: req.body.university
  });

  user.save().then(() => {
    console.log('Post saved');
  });
});

let usr = new User({
    id: v4(),
    name: "John",
    email: "user1@gmail.com",
    password: "",
    phone: "",
    university: ""
    });

usr.save().then(() => {
  console.log('User saved');
}).catch((err) => {
  console.log(err);
});

module.exports = router;