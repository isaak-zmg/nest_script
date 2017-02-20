"use strict";

var ImportModel = require("./model/import").importModel;



function getImport(data) {
    var imports = {};
    imports = new ImportModel(data);
    return imports;
}
exports.getImport = getImport;

