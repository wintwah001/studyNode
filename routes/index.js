var express = require('express');
var router = express.Router();
var User=require('../model/User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/hello', function(req, res, next) {
  res.render('hello', {
    title: 'Express'
  });

});
router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Express'
  });
});
router.post('/login',function (req,res,next) {
  console.log(req.body.Useremail,req.body.Userpwd);
    User.findOne({email:req.body.Useremail},function (err,rtn) {
      if(err) throw err;
      console.log(rtn);
      if(rtn != null && User.compare(req.body.Userpwd,rtn.password)){
        req.session.user={name:rtn.name, email:rtn.email,id:rtn._id};
        console.log('Right');
      res.redirect('/users/detail/'+rtn._id);
      }else {
        res.redirect('/login');
      }
});

});
router.post('/emaildu',function (req,res,next) {
  console.log(req.body);
  User.findOne({email:req.body.email},function (err,rtn) {
    if(err) throw err;
    console.log(rtn);
    if(rtn !=null){
      res.json({status:false})
    }else{
      res.json({status:true})
    }

  });

});
router.get('/signup', function(req, res, next) {
  res.render('signup', {
    title: 'Express'
  });

});
router.get('/sign_up', function(req, res, next) {
  res.render('sign_up', {
    title: 'Express'
  });

});
router.post('/signup', function(req, res, next) {

  var user = new User();
  user.name = req.body.Username;
  user.email = req.body.Useremail;
  user.password = req.body.Userpwd;
  user.save(function(err, rtn) {
    if (err) throw err;
      res.render('user/user-detail', {user1: rtn,tite:'Express'});



  });
});

module.exports = router;
