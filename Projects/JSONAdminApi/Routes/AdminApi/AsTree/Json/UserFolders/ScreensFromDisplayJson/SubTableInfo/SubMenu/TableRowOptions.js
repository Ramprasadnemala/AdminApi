var express = require('express');
var router = express.Router();
let CommonDefaultFocus = require("./TableRowOptions/DefaultFocus");
let CommonDelete = require("./TableRowOptions/Delete");
let CommonPopUp = require("./TableRowOptions/PopUp");
let CommonPrintToPrinter = require("./TableRowOptions/PrintToPrinter");
let CommonShow = require("./TableRowOptions/Show");

router.use('/DefaultFocus', CommonDefaultFocus);
router.use('/Delete', CommonDelete);
router.use('/PopUp', CommonPopUp);
router.use('/PrintToPrinter', CommonPrintToPrinter);
router.use('/Show', CommonShow);

module.exports = router;