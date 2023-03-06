let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromVoucheConsider/JoinTables/JsonConfig");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/InsideVouchersConsider/JoinTables/JsonConfig/DisplayColumn");


let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let Update = async ({  inDataPK, inReportName, inVouchersConsiderPK, JoinTablesColumnsPK, BodyAsJson }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({  inDataPK, inReportName, inVouchersConsiderPK, JoinTablesColumnsPK, BodyAsJson })
    };
};

module.exports = {
    GetFuncs, Update
};
