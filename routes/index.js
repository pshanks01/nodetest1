var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET welcome to openshift demo page
router.get('/welcome', function(req,res) {
  res.render('welcome',
  {title: 'the OpenShift Demo',
  date: 'today\'s date'})
})

module.exports = router;
