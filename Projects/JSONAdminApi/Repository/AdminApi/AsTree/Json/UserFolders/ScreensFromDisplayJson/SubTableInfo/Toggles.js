let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableInfo/Toggles");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, GridName, BodyAsJson }) => {
    return await Dal.Update({ DataPK, FolderName, FileName, ItemName, ScreenName, GridName, BodyAsJson })
};
