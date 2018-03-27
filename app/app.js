
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var port = process.env.PORT || 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("roro");
console.log("test");

routes(app);

var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});