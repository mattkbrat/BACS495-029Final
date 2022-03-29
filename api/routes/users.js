const express = require('express');
const supabase = require('../util/supabaseClient');

const router = express.Router();

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

const getProfiles = () => {
  return new Promise(async (resolve) => {
    setTimeout(() => resolve(supabase
        .from('profiles')
        .select('id')), 1000);
  })
}

// const getProfiles = asyncMiddleware(async (req, res) => {
//   const profiles = await supabase.from('profiles').select('*');
//   return(profiles);
// });


/* GET users listing from supabase */
router.post('/', function (req, res, next) {
  res.json('1');
});

router.get('/:id', function(req, res, next) {
  const db = req.app.locals.db;
  console.log(db);
  const cursor = db.collection('users').find({id: req.params.id});
  cursor.toArray().then(c => res.json(c));
});

router.post('/', function(req, res, next) {
  const db = req.app.locals.db;
  console.log(req.app.locals);

  const user = req.body;
  db.collection('users').insertOne(user).then(c => res.json(c));
});

module.exports = router;