var express=require("express");
var bodyParser=require('body-parser');
var path    = require("path");
var app = express();
var connection = require('./config');
var http = require('http');
var authenticateController=require('./controllers/authenticate-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/authenticate',authenticateController.authenticate);
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
  app.get('/test2.html',function(req,res){
    res.sendFile(path.join(__dirname+'/test2.html'));
    });
    app.get('/test3.html',function(req,res){
      res.sendFile(path.join(__dirname+'/test2.html'));
      });

      app.post('/enter',function(req,res){
        console.log(req.body);
        var sql = "INSERT INTO users (Name, Password) VALUES ('" + req.body.usrname + "'," + req.body.psw+ ")";
        console.log(sql);
connection.query(sql, function (err, result) {
if (err) throw err;
console.log("1 record inserted");
});
        });


app.listen(8080 , function() {
  console.log('Server running at 8080');
});
