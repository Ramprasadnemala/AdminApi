let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableColumns/Duplicate/DuplicateFolder");
let CommonDataSupplyForUpdate = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/Duplicate/DuplicateUserFolder");
let CommonDataSupplyInsert = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/CreateFolder");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

let Clone = async ({ inFolderName, inToFolderName, inDataPK }) => {
    let LocalinDataPK = inDataPK;

    if (LocalinDataPK > 0) {
         return await CommonDataSupplyForUpdate.StartFunc({ inFolderName, inToFolderName, inDataPK: LocalinDataPK })
        //return await CommonDataSupplyInsert.StartFunc({ inFolderName: inToFolderName, inDataPK: LocalinDataPK });
    };
};

module.exports = {
    GetFuncs, Clone
};
