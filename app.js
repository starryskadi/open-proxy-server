var proxy = require('express-http-proxy');
var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

function getProxyURL (req, res, next) {
    req.URL = req.query.to;
    next()
}

app.use('/api', getProxyURL, proxy(function (req) {
    return req.URL;
}));

app.listen(5050);