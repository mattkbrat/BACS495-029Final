var express = require('express');
const mongoose = require("mongoose");

const { route } = require('.');
const app = express();
var router = express.Router();

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  slug: {type: String, unique: true},
  body: String,
  comments: [{
    body: String,
    date: Date
  }],
  date: {type: Date, default: Date.now},
})

const Post = mongoose.model('Post', postSchema);

// let pst = new Post({
//   title: 'My second post',
//   author: 'John Doe',
//   slug: 'my-second-post',
//   body: 'This is my second post',
//   comments: [{
//     body: 'This is my first comment',
//     date: new Date()
//   }],
//   date: new Date()
// });
//
// pst.save().then(() => {
//   console.log('Post saved');
// }).catch((err) => {
//   console.log(err);
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  Post.find({}, function(err, posts) {
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
  Post.find()
});

router.post("/", function(req, res, next){
  const user = {
    "id": req.body.id,
    "name": req.body.name
  }
  console.log(user);
  var db = process.env.MONGO_URI;
  db.collection("users").insertOne(user);
  res.json({"message":"User inserted"});
  let post = new Post({
    title: req.body.title,
    author: req.body.author,
    slug: req.body.slug,
    body: req.body.body,
    comments: [
      {
        body: req.comments.body,
        date: Date.now()
      }
    ]
  });

  post.save().then(() => {
    console.log('Post saved');
  });
});

module.exports = router;
