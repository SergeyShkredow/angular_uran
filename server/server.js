let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 9999;
let $data = require('./app/routes/data');
let config = require('config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4100');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => res.json({message: "Hello! Its API!"}));

app.route("/main/services")
	.get($data.getServiceList);

app.route("/maintenance/techmenu")
    .get($data.getMaintenanceMenu);

app.route("/user")
    .get($data.getUser);


app.listen(port);
console.log("Listening on port " + port);

module.exports = {app};