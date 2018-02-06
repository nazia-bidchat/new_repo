var config = require('../config/config');

var mysql      = require('mysql');
var connection = mysql.createConnection(config.database);

connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;
