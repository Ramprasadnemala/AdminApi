let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForSubTableInfo/Toggles");
let CommonDataSupplyForUpdate = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/SubTableInfo/Toggles/Update")

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

let Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, GridName, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ DataPK, FolderName, FileName, ItemName, ScreenName, GridName, BodyAsJson })
    };
};

module.exports = {
    GetFuncs, Update
};
