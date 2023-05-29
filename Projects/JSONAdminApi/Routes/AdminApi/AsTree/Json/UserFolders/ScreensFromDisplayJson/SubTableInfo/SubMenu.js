var express = require('express');
var router = express.Router();
let CommonSearchRowArray = require("./SubMenu/SearchRowArray");
let CommonFooterType = require("./SubMenu/FooterType");
let CommonTableRowOptions = require("./SubMenu/TableRowOptions");
let CommonTableInfoServerSide = require("./SubMenu/TableInfoServerSide");


router.use('/SearchRowArray', CommonSearchRowArray);
// router.use('/FooterType', CommonFooterType);
// router.use('/TableRowOptions', CommonTableRowOptions);
// router.use('/TableInfoServerSide', CommonTableInfoServerSide);



module.exports = router;