var express = require('express');
var router = express.Router();

var users = [
  {"id":1, "name":"John Smith"},
  {"id":2, "name":"Jane Doe"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  for(let user of users){
    if(user.id == id){
      res.json(user.name);
    }
  }
  res.send("Cannot find user");
})

module.exports = router;