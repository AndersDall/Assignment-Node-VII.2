const express = require('express');
const router = express.Router();
const continent = require('../public/javascripts/continents');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/omos', function(req, res, next) {
  res.render('omos', { title: 'Om os' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Kontakt' });
});

/* GET continents page. */
router.get('/continents', function(req, res, next) {
  let newObj = {title: 'Express', subtitle: "Continents", continent}
  res.render('continents', newObj);
});

module.exports = router;
