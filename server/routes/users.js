var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/enes', function(req, res, next) {

  let user ={id :'1',name :'enes'}
 // res.render('index', { title: 'Express' });
 res.json(user);

});

module.exports = router;
