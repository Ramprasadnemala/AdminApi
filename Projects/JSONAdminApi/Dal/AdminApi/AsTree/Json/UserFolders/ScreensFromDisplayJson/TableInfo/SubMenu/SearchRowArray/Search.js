let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForSubTableInfo/SubMenu/SearchRowArray/Search");
// let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableInfo/SubMenu/SearchRowArray/Search/Update")

let GetFuncs = async ({ inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK });
    };
};

let Update = async ({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inGridName, BodyAsJson }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inGridName, BodyAsJson })
    };
};

module.exports = {
    GetFuncs, Update
};
