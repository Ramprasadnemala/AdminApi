var express = require('express');
var router = express.Router();
let CommonLabel = require("./SearchRowArray/Label");
let CommonSearch = require("./SearchRowArray/Search");

router.use('/Label', CommonLabel);
router.use('/Search', CommonSearch);

module.exports = router;