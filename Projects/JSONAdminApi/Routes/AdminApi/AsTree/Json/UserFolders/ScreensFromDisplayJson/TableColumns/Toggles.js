var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Toggles.Controllers");
let CommonMiddlewares = require("../../../../../../../Middlewares/ForRoutes/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Toggles");

router.get('/',CommonMiddlewares.GetFuncs, CommonControllers.GetFuncs);
router.patch('/', CommonControllers.PatchFuncs);

module.exports = router;