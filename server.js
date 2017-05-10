var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname));

app.post('/Sign', function(req, res) {
    
    res.send("Hello");
});

app.listen(3000, function() {
    console.log("Server Ok");
});