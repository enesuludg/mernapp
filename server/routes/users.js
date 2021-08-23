var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const CONNECTION_URL =process.env.CONNECTION_URL;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.download('../file.pdf')
  res.send('respond with a resource');
});
router.get('/id', function(req, res, next) {
if(req.query.mail){
  console.log(req.query.mail)
  const client = MongoClient.connect(CONNECTION_URL, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sanartup");
      var query = { mail: req.query.mail };
      console.log(query)
      dbo.collection("Users").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log();
        res.json(result);
        db.close();
        return result
        //res.json(result);
        
      }); 
  });
  

  
  
}else res.send('böyle bir id yok');

 // res.render('index', { title: 'Express' });
 

});
async function DB(mail){
  const client = await MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sanartup");
 /*  var myobj = {name: "Enes",surname: "uludag", mail: "uludgenes@gmail.com",password:"test",phone_number:"+905389229860",address: "Highway 37",birth_day: "29.01.1996" };
  dbo.collection("Users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  }); */
    //var query = { _id: mail };
    var query = { mail: ""+mail+"" };
    console.log(query)
    dbo.collection("Users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      return result
      //res.json(result);
      db.close();
    }); 
});
}


module.exports = router;
