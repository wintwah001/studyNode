var express=require('express');
var router=express.Router();
var Book=require('../model/Post')
router.get('/',function(req,res,next){
  res.send('Response with a resource');
});
router.get('/postAdd',function (req,res,next) {
  res.render('postAdd');

});
router.post('/postAdd',function (req,res,next) {
  var book = new Book();
  book.Title = req.body.title;
book.Author = req.body.author;
  book.Content = req.body.content;
  book.save(function(err, rtn) {
    if (err) throw err;
      res.redirect('/post/post-detail/'+rtn._id );

});

});
router.get('/post-detail/:id',function (req,res,next) {
  console.log('call');
  Book.findById(req.params.id,function (err,rtn) {
    if (err) throw err;
    console.log(rtn);
  res.render('user/post-detail',{book:rtn,title:'Express'});
  });

  });
module.exports=router;
