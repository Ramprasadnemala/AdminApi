var express = require('express');
var router = express.Router();
let CommonLabel = require("./SearchRowArray/Label");
let CommonSearch = require("./SearchRowArray/Search");
let CommonnButton = require("./SearchRowArray/Button");

router.use('/Label', CommonLabel);
router.use('/Search', CommonSearch);
// router.use('/Button', CommonnButton);

module.exports = router;