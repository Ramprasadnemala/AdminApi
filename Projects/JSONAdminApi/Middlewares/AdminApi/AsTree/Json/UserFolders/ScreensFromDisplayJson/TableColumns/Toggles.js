
exports.PatchFuncs = (req, res, next) => {
    console.log("req.body", req.body);
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                folderName: "",
                FileName: "",
                ItemName: "",
                ScreenName: "",
                DataAttribute: "",
                BodyAsJson: { }
            },
        });
        return;
    };
    if (("folderName" in req.body)===false) {
        res.json({KTF:false,KReason:"folderName not found in body"})
        return;
    };
    if ((" FileName" in req.body)===false) {
        res.json({KTF:false,KReason:" FileName not found in body"})
        return;
    };
    if (("ItemName" in req.body)===false) {
        res.json({KTF:false,KReason:"ItemName not found in body"})
        return;
    };
    if (("ScreenName" in req.body)===false) {
        res.json({KTF:false,KReason:" ScreenName not found in body"})
        return;
    };
    if (("DataAttribute" in req.body)===false) {
        res.json({KTF:false,KReason:"DataAttribute not found in body"})
        return;
    };
    if (("BodyAsJson" in req.body)===false) {
        res.json({KTF:false,KReason:" BodyAsJson not found in body"})
        return;
    };
    next();
};