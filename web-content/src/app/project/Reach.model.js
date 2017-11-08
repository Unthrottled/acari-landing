"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reach = /** @class */ (function () {
    function Reach(reachId) {
        this._reachId = reachId;
    }
    Object.defineProperty(Reach.prototype, "reachId", {
        get: function () {
            return this._reachId;
        },
        set: function (value) {
            this._reachId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reach.prototype, "rawFile", {
        get: function () {
            return this._rawFile;
        },
        set: function (value) {
            this._rawFile = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reach.prototype, "selectedFile", {
        get: function () {
            return this._selectedFile;
        },
        set: function (value) {
            this._selectedFile = value;
        },
        enumerable: true,
        configurable: true
    });
    return Reach;
}());
exports.Reach = Reach;
//# sourceMappingURL=Reach.model.js.map