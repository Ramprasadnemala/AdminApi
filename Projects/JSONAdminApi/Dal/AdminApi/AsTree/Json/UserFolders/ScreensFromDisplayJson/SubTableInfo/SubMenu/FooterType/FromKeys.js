
let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForSubTableInfo/SubMenu/FooterType/FromKeys");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/SubTableInfo/SubMenu/FooterType/FromKeys/Update")

let GetFuncs = async ({ inDataPK }) => {
    let LocalinDataPK = inDataPK
    if (LocalinDataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: LocalinDataPK });
    };
};

let Update = async ({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, GridName, BodyAsJson }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({ inDataPK: LocalDataPk, inFolderName, inFileName, inItemName, inScreenName, GridName, BodyAsJson })
    };
};

module.exports = {
    GetFuncs, Update
};
