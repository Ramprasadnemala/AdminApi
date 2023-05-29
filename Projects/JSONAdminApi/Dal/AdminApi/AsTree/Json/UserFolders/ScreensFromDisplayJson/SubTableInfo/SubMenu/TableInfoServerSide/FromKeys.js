
let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableInfo/SubMenu/TableInfoServerSide/FromKeys");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableInfo/SubMenu/TableInfoServerSide/FromKeys/Update")

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        // let LocalFromDataSupply = await CommonDatasupply.AsObject({ inDataPK: DataPK });
        let LocalFromDataSupply = await CommonDatasupply.AsObjectFromCommonCode({ inDataPK: DataPK });

        return await LocalFromDataSupply;
        // return await CommonDatasupply.AsObjectFromCommonCode({ inDataPK: DataPK });
    };
};

let Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({ DataPK, FolderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson })
    };
};

module.exports = {
    GetFuncs, Update
};
