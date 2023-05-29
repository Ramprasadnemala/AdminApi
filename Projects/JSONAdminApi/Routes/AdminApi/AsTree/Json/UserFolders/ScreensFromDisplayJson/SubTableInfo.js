var express = require('express');
var router = express.Router();
let CommonToggles = require("./SubTableInfo/Toggles");
let CommonSubMenu = require("./SubTableInfo/SubMenu");


router.use('/Toggles', CommonToggles);
router.use('/SubMenu', CommonSubMenu);

module.exports = router;