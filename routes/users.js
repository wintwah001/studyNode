var express = require('express');
var router = express.Router();
var User=require('../model/User');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/update/:id',function (req,res,next) {
  User.findById(req.params.id,function (err,rtn) {
    if (err) throw err;
    res.render('user/user-update',{user1:rtn,title:'Express'}) ;
  });

});
router.post('/update',function (req,res) {
  console.log('call');
  var update={
    name:req.body.username,
    email:req.body.useremail,
    password:req.body.userpwd,
  }
User.findByIdAndUpdate(req.body.id,{$set:update},function (err,rtn) {
  if(err) throw err;
  res.redirect('/users/detail/'+rtn._id);
});
});
router.get('/detail/:id', function(req,res,next) {
  console.log(req.params.id);
User.findById(req.params.id,function (err,rtn) {
  if(err) throw err;
  console.log(req.session.user);
  console.log(rtn);
res.render('user/detail',{user1:rtn,title:'Express'}) ;
});

});
router.get('/list', function(req, res, next) {
User.find({},function (err,rtn) {
  if(err) throw err;
  res.render('user/user-list',{user:rtn});
  });
});
router.get('/delete/:id', function (req,res,next) {
  User.findByIdAndDelete(req.params.id,function (err,rtn) {
    if(err)throw err;
    res.redirect('/users/list/');

  });

});


module.exports = router;
