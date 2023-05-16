var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/ServerSide/EnterToServer.Controllers");
let CommonMiddlewares = require("../../../../../../../../../Middlewares/ForRoutes/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/ServerSide/EnterToServer");

router.get('/',CommonMiddlewares.GetFuncs, CommonControllers.GetFuncs);
router.patch('/', CommonControllers.Update);

module.exports = router;