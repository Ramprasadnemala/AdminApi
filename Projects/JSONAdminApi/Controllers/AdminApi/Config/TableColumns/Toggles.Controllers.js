let Repos = require("../../../../Repository/AdminApi/Config/TableColumns/Toggles");

let GetFunc = (req, res) => {

};
let Update = (req, res) => {
    console.log("jjjjjjjjjjjjjjj");
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalfolderName = req.body.folderName;
    let jVarLocalFileName = req.body.FileName;
    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalScreenName = req.body.ScreenName;
    let jVarLocalDataAttribute = req.body.DataAttribute;
    let localUpdateBodyAsJson = req.body.BodyAsJson;

    Repos.Update({
        DataPK: LocalDataPk,
        folderName: jVarLocalfolderName,
        FileName: jVarLocalFileName,
        ItemName: jVarLocalItemName,
        ScreenName: jVarLocalScreenName,
        DataAttribute: jVarLocalDataAttribute,
        BodyAsJson: localUpdateBodyAsJson
    });

    console.log("localBodyData", localBodyData);

};



module.exports = { GetFunc, Update }