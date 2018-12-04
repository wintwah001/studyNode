var time=[];
exports.myDate =function () {
  var d=new Date();
  time.push(d.getMonth());
  time.push(d.getDate());
  time.push(d.getDay());
  time.push(d.getFullYear());
  return time;

}
exports.Date = function () {
return new Date();

}
