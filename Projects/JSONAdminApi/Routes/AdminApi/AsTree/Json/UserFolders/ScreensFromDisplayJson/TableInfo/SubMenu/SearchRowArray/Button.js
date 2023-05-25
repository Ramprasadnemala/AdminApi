var express = require('express');
var router = express.Router();
let CommonButton = require("./Button/NewWindow");

router.use('/NewWindow', CommonButton);

module.exports = router;