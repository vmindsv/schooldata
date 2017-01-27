var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('companydata',['companydata']);
var bodyParser = require('body-parser');

/*app.get('/',function(req, res){
    res.send("Hello World server.js")
});*/
app.use(express.static(__dirname + "/src/webapp"));
app.use(bodyParser.json());

app.get('/companydata',function(req, res){
  console.log("i recived a get request")
    db.companydata.find(function(err,docs){
      console.log(docs);
      res.json(docs);
    });
});
app.post('/companydata',function(req,res){
  console.log(req.body);
  db.companydata.insert(req.body,function(err,doc){
    res.json(doc);
  });
});

app.delete('/companydata/:id',function(req,res){
   var id = req.params.id;
   console.log(id);
   db.companydata.remove({_id: mongojs.ObjectId(id)},function(err,doc){
     res.json(doc);
   })
});

app.listen(3000);
console.log("server running on port 3000");
