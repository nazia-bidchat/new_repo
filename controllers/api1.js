var connection = require('./../config');
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var http = require('http');

app.use(express.bodyParser());

    http.createServer(function (req, res) {
            switch (req.url)
            {
                case '/enter': var sql = "INSERT INTO admin (name, password) VALUES" [req.body.usrname,req.body.psw];
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

                    break;
            }
    }).listen(8080);
