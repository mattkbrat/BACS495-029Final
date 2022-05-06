let express = require('express');
const mongoose = require("mongoose");
const { v4 } = require('uuid');

let router = express.Router();

/* User Schema */
const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  phone: String,
  university: String
})

const User = mongoose.model('User', userSchema);

/* GET users */
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.log(err);
      res.send("Some error occurred");
    } else {
      console.log(users);
      res.json(Object.values(users));
    }
  });
});


/* GET user by id */
router.get('/:id', function(req, res) {
  User.findOne({id: req.params.id}, function (err, user) {
    if (err) {
      console.log(err);
      res.send("Some error occurred");
    } else {
      console.log(user);
      res.json(Object.values(user));
    }
  });
});

/* GET user by email and password */
router.get('/:email/:password', function(req, res) {
    User.findOne({email: req.params.email, password: req.params.password}, function (err, user) {
      console.log("User: ", user);
      if (user === null || user === 'null' || user === undefined || user === 'undefined' || user === '' || err) {
        res.status(401).send("Bad login")
      } else {
        res.json(Object.values(user));
      }
    })
  });


/* POST user */
router.post("/", function(req, res){
  console.log("POST request: ", req.body);
  const post = {
    id: v4(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    university: req.body.university
  }

  // TODO - Simplify this
  // Check if the user already exists
  // If so, I should return an error
  // If not, I should create the user
  User.findOne({email: post.email}, function(err, user) {
    if (err) {
        console.log(err);
        res.status(500).send("Some error occurred");
    } else if (user) {
        console.log("User already exists");
        res.status(401).send("Bad login")
    }
    else {
      if (post.name && post.email && post.password && post.phone && post.university) {
        User.create(post, function(err, post) {
          if (err) {
            console.log(err);
            res.status(401).send("Bad login")
          } else {
            console.log(post);
            res.json(post);
          }
        });
      } else {
        res.send("Some error occurred");
      }
    }
  });
});

// let usr = new User({
//     id: v4(),
//     name: "John",
//     email: "user1@gmail.com",
//     password: "",
//     phone: "",
//     university: ""
//     });
//
// usr.save().then(() => {
//   console.log('User saved');
// }).catch((err) => {
//   console.log(err);
// });

module.exports = router;