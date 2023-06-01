let express = require("express");
let router = express.Router();

let CommonCreateFolder = require("./CreateNew/CreateFolder");

router.use("/CreateFolder", CommonCreateFolder)

module.exports = router;
