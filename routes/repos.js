var express = require('express');
var cors = require('cors');
var fetch = require('node-fetch');
var router = express.Router();

/* GET repos */
router.get('/repos', cors(), function(req, res, next) {
  fetch('http://api.github.com/search/repositories?q=language:ruby%20language:python%20language:c%20language:c++%20language:javascript?sort=stars?order=desc')
  .then(r => r.json())
  .then(json => res.send(json))
});

module.exports = router;
