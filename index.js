var express = require('express');
var router = express.Router();


let users = {
  0: {
    username: 'admin@schul-cloud.org',
    cryptoKey: 'f0a8a0fd84e5fa22b17e8f21a89e8f37a8bbaa65420e2ae88a21dfee749e8352',
  },

  1: {
    username: 'lehrer@schul-cloud.org',
    cryptoKey: 'baea14d5b06e986c75bf1434b484ff0af9551d12461f7a4214d304d2d3f5300a',
  },

  2: {
    username: 'superhero@schul-cloud.org',
    cryptoKey: 'fc51da6fa2d27d43d0c05e0ba657eca50c00874c0e77a9e461366bdd7273c895'
  },

};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/keys/users/:username', function(req, res, next){

for(var i=0; i<Object.keys(users).length; i++){
  if(users[i] && users[i].username === req.params.username){
     return res.send(users[i])
   }
 }
});

module.exports = router;
