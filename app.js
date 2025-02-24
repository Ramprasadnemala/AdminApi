let CommonProjectNameForAdminApi = "JSONAdminApi";

const express = require('express');
var path = require('path');
let cors = require("cors");
const formidable = require('formidable');

const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');

var port = normalizePort(process.env.PORT || '4119');

let SubRouteJSONProject = require(`./Projects/${CommonProjectNameForAdminApi}/Routes`);

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '100mb' }));

app.get('/', function (req, res, next) {
    res.status(301).redirect(`/${CommonProjectNameForAdminApi}/Html/Admin/Dashboard.html`);
});

app.use(`/${CommonProjectNameForAdminApi}`, cors({ origin: '*' }), SubRouteJSONProject);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Listening in port : ${port}`);
    console.log(`Click to open : http://localhost:${port}`);
});