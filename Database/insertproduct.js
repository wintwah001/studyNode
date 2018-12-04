var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydatabase");
var mypd=[
  {name:'Item 1',price:2000},
  {name:'Item 2',price:1000},
  {name:'Item 3',price:3000},
  {name:'Item 4',price:4000},
  {name:'Item 5',price:5000},
  {name:'Item 6',price:6000},
  {name:'Item 7',price:7000},
  {name:'Item 8',price:9000},
  {name:'Item 9',price:8000},
  {name:'Item 10',price:2000},
];
dbo.collection("products").insertMany(mypd, function(err, res) {
  if (err) throw err;
  console.log("Number of documents inserted: " + res.insertedCount);
  db.close();
 });
});
