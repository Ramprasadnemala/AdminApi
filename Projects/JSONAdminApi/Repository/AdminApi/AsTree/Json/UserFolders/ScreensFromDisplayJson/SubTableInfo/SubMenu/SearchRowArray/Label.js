let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableInfo/SubMenu/SearchRowArray/Label");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({ inDataPK });
};

exports.Update = async ({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inGridName, BodyAsJson }) => {
    return await Dal.Update({  inDataPK, inFolderName, inFileName, inItemName, inScreenName, inGridName, BodyAsJson })
};
