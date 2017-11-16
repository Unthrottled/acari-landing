"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Identifier_model_1 = require("./Identifier.model");
var ExportableReach = /** @class */ (function () {
    function ExportableReach(identifier) {
        if (identifier === void 0) { identifier = new Identifier_model_1.Identifier(); }
        this._identifier = identifier;
    }
    Object.defineProperty(ExportableReach.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: true,
        configurable: true
    });
    return ExportableReach;
}());
exports.ExportableReach = ExportableReach;
//# sourceMappingURL=ExportableReach.model.js.map