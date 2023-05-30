let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableInfo/SubMenu/FooterType/FromKeys");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({ inDataPK });
};

exports.Update = async ({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, GridName, BodyAsJson }) => {
    return await Dal.Update({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, GridName, BodyAsJson })
};
