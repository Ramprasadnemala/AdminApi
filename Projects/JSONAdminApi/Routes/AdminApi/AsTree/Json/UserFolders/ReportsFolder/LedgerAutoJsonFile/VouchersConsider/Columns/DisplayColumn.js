var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumn.Controllers");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonControllers.PatchFuncs);

module.exports = router;