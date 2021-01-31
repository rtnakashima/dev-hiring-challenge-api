var express = require('express');
var cors = require('cors');
var fetch = require('node-fetch');
var router = express.Router();
var db = require('../models/index');

/* GET repos */
router.get('/repos', cors(), function(req, res, next) {
  fetch("http://api.github.com/search/repositories?q="
      + "language:ruby%20"
      + "language:python%20"
      + "language:c%20"
      + "language:c++%20"
      + "language:javascript"
      + "?sort=stars?order=desc?per_page=100")
  .then(r => r.json())
  .then(json => {
    if (json.items) {
      json.items.forEach(item => db.Repo.create({
        repo_id: item.id,
        full_name: item.full_name
      }).catch(err => console.log('Error:', err.parent.detail))) 
    }
    return json
  })
  .then(json => res.send(json))
});

module.exports = router;
