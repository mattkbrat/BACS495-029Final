let express = require('express');
const mongoose = require("mongoose");

const { route } = require('.');
const { v4 } = require('uuid');
const app = express();
let router = express.Router();

const questionSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    body: String,
    votes: Number,
    answers: [String],
    date: {type: Date, default: Date.now},
})

const Question = mongoose.model('Question', questionSchema);

/* GET questions listing. */
router.get('/', function(req, res, next) {
    Question.find({}, function(err, posts) {
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
    Question.find({id: req.params.id}, function(err, posts) {
        if (err) {
            console.log(err);
            res.send("Some error occurred");
        } else {
            console.log(posts);
            res.json(Object.values(posts));
        }
    });
});

router.post("/", function(req, res, next){
    try{
        let question = new Question({
            id: v4(),
            title: req.body.title,
            author: req.body.author,
            body: req.body.body,
            answers: [],
            votes: 0,
        });

        question.save().then(() => {
            console.log('Post saved');
            res.json(question);
        });
    } catch(e){
        console.log(e);
        res.status(500).send("Some error occurred");
    }
});

router.patch("/votes/id/:id", function(req, res, next){
    console.log("ID: " + req.params.id);
    // Get question by id
    Question.findOne({id: req.params.id}, function(err, question){
        if(err){
            console.log(err);
            res.status(500).send("Some error occurred");
        } else {
            console.log(question);
            question.votes = question.votes + 1;

            question.save().then(() => {
                console.log('Post updated');
                res.json(question);
            });
        }
    });
});

router.patch('/answers/id/:id', function(req, res, next){
    console.log("ID: " + req.params.id);
    // Get question by id
    Question.findOne({id: req.params.id}, function(err, question){
        if(err){
            console.log(err);
            res.status(500).send("Some error occurred");
        } else {
            console.log(question);
            question.answers.push(req.body.answer);
            question.save().then(() => {
                res.json(question);
            }
            );
        }
    });
});

module.exports = router;

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